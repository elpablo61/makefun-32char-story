# Tell a Whole Story in 32 Characters

[![Tell a Whole Story in 32 Characters](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/elpablo61/makefun-32char-story/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Entries](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/elpablo61/makefun-32char-story/entries.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/elpablo61/makefun-32char-story/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

Entry for the [make.fun](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978) bounty **Tell a Whole Story in 32 Characters** — one Wi-Fi network name of at most 32 characters that lands a joke and implies a whole story.

## The entry

```
Mom changed it after Dad left
```

29 characters. A deadpan fact, not a punchline: Mom renamed (and locked) the
network the day Dad left, so the Wi-Fi list itself tells the divorce story —
two named people, one specific action, one moment. No explanation, no
wordplay, one concept only.

Calibrated against 90 verified top-10 winning one-liners
(`judge-calibration-one-liner.md`): winners are micro-anecdotes that sound
true, with a named person and a specific moment — never a joke that explains
itself.

## How it works

`main.ts` (Node 22) writes the single Wi-Fi name to `/output/entry.txt`
(UTF-8, no trailing newline, 29 characters — inside the 1–32 gate).

```sh
node main.ts
cat /output/entry.txt
```
