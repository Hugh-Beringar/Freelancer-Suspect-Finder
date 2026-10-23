const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const suspects = require('../suspects.js');
const F = require('../filter.js');

test('archive has 72 unique portraits, 12 per hair type, with consistent trait records', () => {
  assert.equal(suspects.length, 72);
  assert.equal(new Set(suspects.map(s => s.id)).size, 72);
  for (const hair of F.HAIR.filter(h => h !== 'any')) {
    assert.equal(suspects.filter(s => s.hair === hair).length, 12);
  }
  for (const s of suspects) {
    assert.ok(fs.existsSync(path.join(__dirname, '..', s.image)), s.image);
    const code = path.basename(s.image).split('_')[1];
    const initials = { earrings: 'E', glasses: 'G', hat: 'H', necklace: 'N', tattoo: 'T' };
    for (const trait of F.TRAITS) assert.equal(s.traits.includes(trait), code.includes(initials[trait]), `${s.name}: ${trait}`);
  }
});

test('unfiltered archive and individual hair filters return expected pools', () => {
  assert.equal(F.select(suspects, F.fresh()).active.length, 72);
  for (const hair of F.HAIR.slice(1)) assert.equal(F.select(suspects, { ...F.fresh(), hair }).active.length, 12);
});

test('Red hair + Earrings + Glasses + Hat reproduces the cheatsheet example', () => {
  const state = F.fresh(); state.hair = 'red';
  for (const trait of ['earrings', 'glasses', 'hat']) state.traits[trait] = 'yes';
  const result = F.select(suspects, state).active;
  assert.deepEqual(result.map(s => s.name), ['Gabrielle', 'Nathaniel']);
  assert.ok(result.every(s => s.traits.includes('tattoo')), 'Extra tattoos must not exclude a match');
});

test('overlapping three-look profiles include both chart columns', () => {
  const state = F.fresh(); state.hair = 'blonde';
  for (const trait of ['earrings', 'glasses', 'necklace']) state.traits[trait] = 'yes';
  assert.deepEqual(F.select(suspects, state).active.map(s => s.name), ['Cathy', 'Anders', 'Netta', 'Wendell']);
  state.traits.tattoo = 'no';
  assert.deepEqual(F.select(suspects, state).active.map(s => s.name), ['Cathy', 'Anders']);
});

test('every valid 3-look briefing leaves its portrait and 2–4 suspects per hair group', () => {
  for (const suspect of suspects) {
    for (let i = 0; i < suspect.traits.length - 2; i++) {
      for (let j = i + 1; j < suspect.traits.length - 1; j++) {
        for (let k = j + 1; k < suspect.traits.length; k++) {
          const state = F.fresh(); state.hair = suspect.hair;
          for (const trait of [suspect.traits[i], suspect.traits[j], suspect.traits[k]]) state.traits[trait] = 'yes';
          const result = F.select(suspects, state).active;
          assert.ok(result.some(s => s.id === suspect.id));
          assert.ok(result.length === 2 || result.length === 4, `${suspect.name}: ${result.length}`);
        }
      }
    }
  }
});

test('all 243 tri-state combinations per hair follow the explicit presence/absence constraints', () => {
  for (const hair of F.HAIR) for (let code = 0; code < 3 ** F.TRAITS.length; code++) {
    const state = F.fresh(); state.hair = hair;
    let n = code;
    for (const trait of F.TRAITS) { state.traits[trait] = ['any', 'yes', 'no'][n % 3]; n = Math.floor(n / 3); }
    const expected = suspects.filter(s => {
      if (hair !== 'any' && hair !== s.hair) return false;
      const present = F.TRAITS.filter(t => state.traits[t] === 'yes');
      const absent = F.TRAITS.filter(t => state.traits[t] === 'no');
      return present.every(t => s.traits.includes(t)) && absent.every(t => !s.traits.includes(t));
    });
    assert.deepEqual(F.select(suspects, state).active, expected);
  }
});

test('ruling out affects active count; showing ruled-out profiles does not reintroduce nonmatches', () => {
  const state = F.fresh(); state.hair = 'red'; state.excluded = ['gloria', 'patricia'];
  let result = F.select(suspects, state);
  assert.equal(result.matching.length, 12); assert.equal(result.active.length, 11);
  assert.ok(!result.visible.some(s => s.id === 'gloria'));
  state.showExcluded = true; result = F.select(suspects, state);
  assert.equal(result.visible.length, 12); assert.equal(result.active.length, 11);
  assert.ok(result.visible.some(s => s.id === 'gloria'));
  assert.ok(!result.visible.some(s => s.id === 'patricia'));
});

test('corrupt or outdated saved state is sanitized', () => {
  for (const value of [null, 12, 'bad', []]) assert.deepEqual(F.sanitize(value, suspects), F.fresh());
  const result = F.sanitize({ hair: 'green', traits: { glasses: 'yes', hat: 'false' }, excluded: ['gloria', 'missing', 'gloria', {}], showExcluded: 'true' }, suspects);
  assert.equal(result.hair, 'any'); assert.equal(result.traits.glasses, 'yes'); assert.equal(result.traits.hat, 'any');
  assert.deepEqual(result.excluded, ['gloria']); assert.equal(result.showExcluded, false);
});
