---
sidebar_position: 1
slug: /
---

# Introduction

This is an unofficial copy of Mozhi 2.0 documentation obtained from [Varamzohi Project](https://sites.google.com/site/cibu/mozhi2), [Keyman](https://help.keyman.com/keyboard/mozhi_malayalam/3.2.3/mozhi_malayalam) and [Internet Archive](http://web.archive.org/web/20220309013427/https://sites.google.com/site/cibu/mozhi/mozhi2) (old).

## What is Mozhi?

Mozhi is an open source Malayalam keyboard scheme, based on transliteration, originally developed for Varamzohi application. It uses a unique English character sequence for each Malayalam letter making it easier to type for those who use [Manglish](https://en.wikipedia.org/wiki/Manglish#Other_usage). Raj Nair and Junaid P. V. are the authors of early versions. Current version is written by Cibu C. J. 

Mozhi is used by following applications / input methods:

- [Mozhi Malayalam Keyman](https://keyman.com/keyboards/mozhi_malayalam)
- [Google Input Tools (Chrome extension)](https://chrome.google.com/webstore/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab)
  
### Changes from v1

The spec has been updated from its version 1 to include newly encoded characters, handling of *[chandrakkala](https://en.wikipedia.org/wiki/Virama)*, use of joiners, <kbd>Shift</kbd>-less input etc. In this, we are trying to hit a sweet spot with following objectives:

1. Naturalness - being close to transliteration traditions of Malayalees; example: `th` for `ത`.
2. Consistency - same sequence for same phenomena, for example, `h` is used to indicate aspirated consonants.
3. Economical about keystrokes
4. Type without pressing <kbd>Shift</kbd> key

A simple [case study](https://docs.google.com/document/d/1081KgfIwCK0dzB1kHhE1Fain0F-KHJN6Bj3BaNbewGs/edit?usp=sharing) looking at the relationship between these parameters and the corresponding keystroke economy.

Rule-set that can implement the spec is available in this [spreadsheet](https://docs.google.com/spreadsheets/d/1uBtNtaLPESjjdvv3X__qHkBGoO9UfTIjGOIdcgAgxwA/edit#gid=0). Test cases for any implementation of Mozhi 2 are also listed there.