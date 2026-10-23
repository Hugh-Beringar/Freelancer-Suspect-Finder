(function () {
  'use strict';
  const F = window.ShowdownFilter;
  const suspects = window.SUSPECTS;
  const byId = new Map(suspects.map(s => [s.id, s]));
  const $ = id => document.getElementById(id);
  const title = value => value.charAt(0).toUpperCase() + value.slice(1);
  const hairLabel = hair => hair === 'any' ? 'Any hair type' : hair === 'bald' ? 'Bald' : `${title(hair)} hair`;
  const storageKey = 'showdown-finder:v1';
  let storageAvailable = true;
  let state = F.fresh();
  let previousState = null;
  let openSuspect = null;
  try { state = F.sanitize(JSON.parse(localStorage.getItem(storageKey)), suspects); }
  catch (_) { /* Missing, corrupt, or inaccessible storage starts a fresh board. */ }

  const icons = {
    earrings: '<path d="M7 4v7m10-7v7M7 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm10 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/>',
    glasses: '<path d="m3 13 1-7h3m14 7-1-7h-3M9 14h6"/><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/>',
    hat: '<path d="M3 16c5 4 13 4 18 0M6 16l2-11 4 2 4-2 2 11M7 12h10M2 16h20"/>',
    necklace: '<path d="M6 3C0 13 7 17 12 20c5-3 12-7 6-17M12 17l3 3-3 3-3-3Z"/>',
    tattoo: '<path d="m13 2-3 7H5l4 5-3 8 7-5 5 4-1-8 5-5-8 1Z"/>'
  };
  const icon = trait => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[trait]}</svg>`;
  const crossIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 4 8 8M12 4l-8 8"/></svg>';
  const restoreIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 6a5 5 0 1 1 0 5M3 2v4h4"/></svg>';

  $('hair-options').innerHTML = F.HAIR.map(hair => `<button type="button" class="hair-button" data-hair="${hair}" aria-pressed="false" aria-label="${hairLabel(hair)}">${hair === 'any' ? '' : `<span class="hair-swatch ${hair}" aria-hidden="true"></span>`}${hair === 'any' ? 'Any hair type' : title(hair)}</button>`).join('');
  $('trait-options').innerHTML = F.TRAITS.map(trait => `<div class="trait-row"><span class="trait-label" id="label-${trait}">${icon(trait)}${title(trait)}</span><div class="trait-toggle" role="group" aria-labelledby="label-${trait}">${['any', 'yes', 'no'].map(value => `<button type="button" data-trait="${trait}" data-value="${value}" aria-pressed="false" aria-label="${title(trait)}: ${title(value)}">${title(value)}</button>`).join('')}</div></div>`).join('');

  function save() {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); storageAvailable = true; }
    catch (_) { storageAvailable = false; }
    $('save-status').textContent = storageAvailable ? 'Progress saved in this browser' : 'Session only · browser saving unavailable';
  }
  function commit(change, message) {
    previousState = structuredClone(state);
    change();
    save();
    render();
    $('undo-message').textContent = message;
    $('undo-bar').hidden = false;
    const count = F.select(suspects, state).active.length;
    $('announcement').textContent = `${message} ${count} possible suspect${count === 1 ? ' remains' : 's remain'}.`;
  }
  function chips(suspect) {
    return suspect.traits.map(trait => `<span class="trait-chip${state.traits[trait] === 'yes' ? ' matched' : ''}">${title(trait)}</span>`).join('');
  }
  function describeProfile() {
    const pieces = [];
    if (state.hair !== 'any') pieces.push(hairLabel(state.hair));
    for (const trait of F.TRAITS) {
      if (state.traits[trait] === 'yes') pieces.push(title(trait));
      if (state.traits[trait] === 'no') pieces.push(`No ${trait}`);
    }
    return pieces;
  }
  function card(suspect) {
    const excluded = state.excluded.includes(suspect.id);
    const number = String(suspects.indexOf(suspect) + 1).padStart(2, '0');
    return `<article class="suspect-card${excluded ? ' excluded' : ''}" data-id="${suspect.id}" aria-label="${suspect.name}${excluded ? ', ruled out' : ''}">
      <button class="portrait-button" data-portrait="${suspect.id}" aria-label="Enlarge ${suspect.name} portrait"><img src="${suspect.image}" alt="${suspect.name}, ${hairLabel(suspect.hair).toLowerCase()}, ${suspect.traits.join(', ')}" loading="lazy" width="500" height="500"><span class="profile-number">${excluded ? 'RULED OUT' : `REF. ${number}`}</span><span class="expand-hint" aria-hidden="true">Enlarge ↗</span></button>
      <div class="card-info"><div class="card-title-line"><h3>${suspect.name}</h3><span>${hairLabel(suspect.hair)}</span></div><div class="trait-chips card-traits">${chips(suspect)}</div></div>
      <button class="rule-out" data-exclude="${suspect.id}" aria-label="${excluded ? 'Restore' : 'Rule out'} ${suspect.name}">${excluded ? restoreIcon : crossIcon}${excluded ? 'Restore suspect' : 'Rule out'}</button>
    </article>`;
  }
  function render() {
    document.querySelectorAll('[data-hair]').forEach(button => button.setAttribute('aria-pressed', String(state.hair === button.dataset.hair)));
    document.querySelectorAll('[data-trait]').forEach(button => button.setAttribute('aria-pressed', String(state.traits[button.dataset.trait] === button.dataset.value)));
    $('show-excluded').checked = state.showExcluded;
    const { matching, active, visible } = F.select(suspects, state);
    const eliminated = matching.length - active.length;
    const pieces = describeProfile();
    $('profile-summary').textContent = pieces.length ? pieces.join(' · ') : 'No traits entered yet.';
    $('match-count').textContent = active.length;
    // Keep the live count in one stable, accessible heading.
    $('results-title').lastChild.textContent = ` possible suspect${active.length === 1 ? '' : 's'}`;
    $('pool-count').textContent = `${String(active.length).padStart(2, '0')} / 72`;
    $('excluded-count').textContent = `(${eliminated})`;
    $('results-description').textContent = !pieces.length ? 'Start with hair type, then add the looks from your briefing.' : active.length ? 'These profiles fit your intel. Open a portrait to take a closer look.' : 'Review your intel or restore a ruled-out suspect.';
    $('filter-description').textContent = `${pieces.length ? `${matching.length} match the profile` : 'Showing the full archive'}${eliminated ? ` · ${eliminated} ruled out` : ''}`;
    $('suspect-grid').innerHTML = visible.map(card).join('');
    $('empty-state').hidden = visible.length !== 0;
    if (!visible.length) {
      const allExcluded = matching.length > 0 && !active.length;
      $('empty-title').textContent = allExcluded ? 'Every matching suspect is ruled out.' : 'No profiles match this intel.';
      $('empty-description').textContent = allExcluded ? 'Show the ruled-out profiles and restore any suspect you want to reconsider.' : 'Try clearing a trait. An unlisted briefing trait should be left on Any.';
      $('empty-reset').textContent = allExcluded ? 'Show ruled out' : 'Clear traits';
      $('empty-reset').dataset.action = allExcluded ? 'show' : 'clear';
    }
    if (openSuspect) updatePortrait();
  }

  function clearFilters() {
    commit(() => { state.hair = 'any'; state.traits = F.fresh().traits; }, 'Traits cleared.');
  }
  function toggleExcluded(id) {
    const suspect = byId.get(id);
    if (!suspect) return;
    const wasExcluded = state.excluded.includes(id);
    commit(() => {
      state.excluded = wasExcluded ? state.excluded.filter(other => other !== id) : [...state.excluded, id];
    }, `${suspect.name} ${wasExcluded ? 'restored' : 'ruled out'}.`);
  }
  $('hair-options').addEventListener('click', event => {
    const button = event.target.closest('[data-hair]');
    if (button && button.dataset.hair !== state.hair) commit(() => { state.hair = button.dataset.hair; }, `Hair set to ${button.textContent.toLowerCase()}.`);
  });
  $('trait-options').addEventListener('click', event => {
    const button = event.target.closest('[data-trait]');
    if (!button || state.traits[button.dataset.trait] === button.dataset.value) return;
    commit(() => { state.traits[button.dataset.trait] = button.dataset.value; }, `${title(button.dataset.trait)} set to ${title(button.dataset.value)}.`);
  });
  $('clear-filters').addEventListener('click', clearFilters);
  $('new-showdown').addEventListener('click', () => {
    commit(() => { state = F.fresh(); }, 'New showdown started.');
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  $('show-excluded').addEventListener('change', event => {
    commit(() => { state.showExcluded = event.target.checked; }, event.target.checked ? 'Ruled-out profiles shown.' : 'Ruled-out profiles hidden.');
  });
  $('empty-reset').addEventListener('click', () => {
    if ($('empty-reset').dataset.action === 'show') commit(() => { state.showExcluded = true; }, 'Ruled-out profiles shown.');
    else clearFilters();
  });
  $('undo-button').addEventListener('click', () => {
    if (!previousState) return;
    state = previousState;
    previousState = null;
    save(); render();
    $('undo-bar').hidden = true;
    const count = F.select(suspects, state).active.length;
    $('announcement').textContent = `Last change undone. ${count} possible suspect${count === 1 ? ' remains' : 's remain'}.`;
    if (!$('portrait-dialog').open) $('clear-filters').focus({ preventScroll: true });
  });

  function updatePortrait() {
    const suspect = byId.get(openSuspect);
    if (!suspect) return;
    $('portrait-name').textContent = suspect.name;
    $('portrait-image').src = suspect.image;
    $('portrait-image').alt = `${suspect.name}, full suspect reference portrait`;
    $('portrait-hair').textContent = hairLabel(suspect.hair);
    $('portrait-traits').innerHTML = chips(suspect);
    $('portrait-rule-out').textContent = state.excluded.includes(suspect.id) ? 'Restore suspect' : 'Rule out suspect';
  }
  function openPortrait(id) {
    if (!byId.has(id)) return;
    openSuspect = id;
    updatePortrait();
    $('portrait-dialog').showModal();
  }
  $('suspect-grid').addEventListener('click', event => {
    const portrait = event.target.closest('[data-portrait]');
    if (portrait) { openPortrait(portrait.dataset.portrait); return; }
    const rule = event.target.closest('[data-exclude]');
    if (rule) {
      const oldButtons = [...$('suspect-grid').querySelectorAll('[data-exclude]')];
      const index = oldButtons.indexOf(rule);
      toggleExcluded(rule.dataset.exclude);
      const newButtons = [...$('suspect-grid').querySelectorAll('[data-exclude]')];
      (newButtons[Math.min(index, newButtons.length - 1)] || $('empty-reset')).focus({ preventScroll: true });
    }
  });
  $('portrait-rule-out').addEventListener('click', () => {
    const excluded = state.excluded.includes(openSuspect);
    toggleExcluded(openSuspect);
    $('portrait-dialog').close();
    const returnTarget = excluded || state.showExcluded ? $('suspect-grid').querySelector(`[data-portrait="${openSuspect}"]`) : $('undo-button');
    returnTarget?.focus({ preventScroll: true });
  });
  $('portrait-dialog').addEventListener('close', () => { openSuspect = null; });
  for (const dialog of document.querySelectorAll('dialog')) {
    dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
  }
  $('about-button').addEventListener('click', () => $('about-dialog').showModal());
  $('credits-button').addEventListener('click', () => $('about-dialog').showModal());
  save();
  render();
})();
