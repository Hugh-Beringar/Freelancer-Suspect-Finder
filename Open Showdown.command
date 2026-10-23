#!/bin/zsh
# Open the offline website in the default browser. No server is needed.
cd -- "${0:A:h}" || exit 1
open "index.html"
