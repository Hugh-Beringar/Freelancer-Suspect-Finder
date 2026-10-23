/* Pure matching logic. Unspecified briefing traits are unknown, never absent. */
(function (root) {
  'use strict';
  const TRAITS = ['earrings', 'glasses', 'hat', 'necklace', 'tattoo'];
  const HAIR = ['any', 'black', 'blonde', 'brown', 'gray', 'red', 'bald'];
  const fresh = () => ({ hair: 'any', traits: Object.fromEntries(TRAITS.map(t => [t, 'any'])), excluded: [], showExcluded: false });
  function sanitize(input, suspects) {
    const state = fresh();
    if (!input || typeof input !== 'object') return state;
    if (HAIR.includes(input.hair)) state.hair = input.hair;
    for (const trait of TRAITS) {
      if (['any', 'yes', 'no'].includes(input.traits?.[trait])) state.traits[trait] = input.traits[trait];
    }
    const validIds = new Set(suspects.map(s => s.id));
    if (Array.isArray(input.excluded)) state.excluded = [...new Set(input.excluded.filter(id => validIds.has(id)))];
    state.showExcluded = input.showExcluded === true;
    return state;
  }
  function matches(suspect, state) {
    return (state.hair === 'any' || suspect.hair === state.hair) && TRAITS.every(trait =>
      state.traits[trait] === 'any' || suspect.traits.includes(trait) === (state.traits[trait] === 'yes')
    );
  }
  function select(suspects, state) {
    const matching = suspects.filter(s => matches(s, state));
    const active = matching.filter(s => !state.excluded.includes(s.id));
    return { matching, active, visible: state.showExcluded ? matching : active };
  }
  const api = { TRAITS, HAIR, fresh, sanitize, matches, select };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ShowdownFilter = api;
})(typeof window !== 'undefined' ? window : globalThis);
