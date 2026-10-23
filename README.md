# Showdown — Freelancer Suspect Finder

A local, offline website for finding possible Hitman Freelancer showdown leaders using Riximilian’s cheatsheet. No installation, account, build tools, or internet connection needed.

## Open it

Double-click **index.html** to open it in Safari, Chrome, or another current browser. Keep the folder together: the portraits, scripts, and stylesheet are local files. On macOS, you can also double-click **Open Showdown.command**.

## Use it

1. Select the hair type from the briefing.
2. Set each listed look to **Yes**. Leave unlisted looks on **Any**: suspects can have more traits than the briefing lists.
3. Click a portrait to enlarge it. **Rule out** removes a suspect from your current pool. **Undo**, or **Show ruled out** followed by **Restore suspect**, brings them back.
4. Use **No** only when you’ve confirmed that a trait is absent. An unchecked/unlisted briefing look is not evidence of absence.
5. **Clear traits** clears hair and look filters while preserving ruled-out suspects. **New showdown** resets everything; Undo can reverse the reset until your next action.

Filters and ruled-out profiles save in this browser when local storage is available. File URL storage behavior varies by browser; the status in the profile panel reports whether saving is available. Moving the folder or switching browsers may start a fresh board. No data is sent anywhere by the app. External source links open only when clicked.

Names are portrait reference labels from the community dataset, not the randomized suspect names in your mission. Tells and meeting agendas must be checked in-game. This archive follows the cheatsheet rather than live game data, including the original ambiguity about glasses resting on Bald Male 2’s hat (treated as Hat only).

## Source and credits

- Original research and portraits: [Riximilian’s Reddit cheatsheet](https://www.reddit.com/r/HiTMAN/comments/1arlwol/freelancer_showdown_leader_identification_cheat/).
- Portrait assets, trait records, and reference names: [flamewing/hitman-freelancer-leaders](https://github.com/flamewing/hitman-freelancer-leaders), Apache 2.0. License included in `THIRD-PARTY-LICENSE.txt`; see `CREDITS.md` for extraction details.

## Development

Buildless HTML, CSS, and JavaScript. `suspects.js` contains all 72 records; `filter.js` contains pure filter/state logic. Run the matching and asset integrity checks with:

```sh
node --test tests/filter.test.cjs
```

Validation: all eight automated matching/state/data checks passed, including every three-look briefing in the archive and all 1,701 hair/trait filter combinations. Browser checks via a temporary local HTTP server covered filtering, portrait enlargement, ruling out/restoring, saved progress after reload, empty results, and undo. The preview browser blocks file URLs, so direct-file launch could not be checked there; the application uses classic local scripts and images with no fetches or server dependencies.

To preview over HTTP if desired, run `python3 -m http.server 8747 --bind 127.0.0.1` in this folder and visit http://127.0.0.1:8747. Directly opening index.html also works and needs no server.
