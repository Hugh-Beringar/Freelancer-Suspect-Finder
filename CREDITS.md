# Attribution and data provenance

Original cheatsheet, research, and suspect screenshots: **Riximilian** (u/Riximilian).

https://www.reddit.com/r/HiTMAN/comments/1arlwol/freelancer_showdown_leader_identification_cheat/

The original author approved the linked interactive adaptation in that post’s comments.

Portrait files and structured trait/reference-name records were obtained from **flamewing/hitman-freelancer-leaders**, main branch, on 2026-10-23:

https://github.com/flamewing/hitman-freelancer-leaders

https://flamewing.github.io/hitman-freelancer-leaders/

That repository is distributed under the Apache License, Version 2.0. Its full license is reproduced in THIRD-PARTY-LICENSE.txt. Original game imagery remains the property of its respective owners.

## Changes in this application

The 72 `leader-*.png` portraits are copied without alteration. The source `content.html` data attributes were extracted into `suspects.js`: reference name, hair category, five looks, and portrait path. Stable lowercase IDs and local image paths were added; trait values were preserved. `gray` is the source’s hair-category spelling.

The HTML interface, styling, filter/state logic, absence filtering, elimination tracking, portrait dialog, undo, and local progress persistence were newly written for this application. No upstream scripts, fonts, logos, or analytics are loaded at runtime.

Unofficial fan tool; no affiliation with IO Interactive. HITMAN and all game imagery belong to their respective owners. Reference labels are not guaranteed to match the randomized names in a mission. Community data may not reflect future game changes.
