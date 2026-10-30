# Kotoba N4 / A2 — 30 October 2026

Added 4,535 cards (4,514 distinct spellings; differing readings remain distinct), organized into 6 parts of speech and 53 nonempty subcategories. The N5 canonical data and its generated bundle remain unchanged.

## Sources and accounting

The supplied PDFs are recorded with SHA-256 and page-level provenance in `kotoba-n4-source-rows.json` and `kotoba-n4.json`.

| ID | Source | Extracted rows | Cards containing source |
|---|---|---:|---:|
| 7 | Marugoto Elementary 1 Activities | 833 | 827 |
| 8 | Marugoto Elementary 1 Competences | 981 | 975 |
| 9 | Marugoto Elementary 2 Competences | 1,355 | 1,333 |
| 10 | Marugoto Elementary 2 Activities | 1,154 | 1,137 |
| 11 | Irodori A2(1), orange | 1,191 | 1,125 |
| 12 | Irodori A2(2), yellow | 1,770 | 1,682 |
| 13 | 1000 Kotoba Sehari-hari, remaining half | 411 | 411 |

Source membership overlaps after deduplication. All 7,695 normalized source records are retained. Repeated spellings/readings combine source senses. Kana homophones with different kanji remain distinct. The source may itself use the same kana spelling for more than one meaning; such senses share a card.

The exact 411 spellings in `kotoba-audit.json.everydayExcludedWords` appear with source 13; none of `everydaySelectedWords` is imported from source 13. This preserves the earlier 411/822 N5 split rather than estimating half of the PDF's title count. Some words also occur in N5 through other books: collections are independent, and N5 is never subtracted or overwritten.

## Review and limits

- Parts of speech use explicit PDF verb groups / adjective markers, reviewed adjective sets, existing reviewed N5 matches, and Indonesian topic rules. Proper names receive their own noun subgroup.
- Corrections are retained in `kotoba-n4-corrections.json`, including retina/網膜, 血/ち, 婚約/こんやく, 外す/はずす, 凍る/こおる, and intransitive/transitive Indonesian meanings.
- Kana and romaji are included on every card. Verbs expose dictionary and polite forms. A2 source phrases remain phrases.
- This is an A2 study collection, not an official complete JLPT N4 word list. Daily-only additions are labeled Pengayaan because they can exceed N4.
- 755 cards reuse previously reviewed example sentences; other cards explicitly say examples are not yet available. No generic example sentences were fabricated for the remaining cards.
- Source senses and many proper names are preserved. This import is not an independent linguistic certification of every source sentence or dictionary nuance.

## Rebuild

With the seven supplied PDFs together in a directory:

1. `python3 scripts/import-kotoba-n4.py PDF_DIRECTORY`
2. `python3 scripts/normalize-kotoba-n4.py PATH_TO_1000_KOTOBA_PDF`
3. `python3 scripts/build-kotoba-n4.py`
4. `python3 scripts/build-kotoba-data.py`

Steps 3–4 use retained records and need no PDFs. Import requires pdfplumber and pdftotext; normalization and romanization also use the project's existing Node kana utilities.

## Application and checks

N4 browsing, detail, kana/romaji/meaning search, filters, 15-card pages, saved words, custom words, and Kotoba quiz all select the active level. Old custom words default to N5. N4 Kanji/Bunpo and mixed quiz remain explicitly pending, avoiding accidental N5 content under N4.

Settings failed to render because `row()` was missing. Restoring this helper fixes its menu links and level controls. The level badge is now an accessible toggle, and changes reset detail/filter state, persist the preference, and remain locked during active quizzes or simulations. Invalid local preference/history/custom-data shapes recover without stopping navigation.

Regression tests: `tests/kotoba-n4.test.cjs`, `tests/app-menus.test.cjs`, plus existing Kotoba, taxonomy, navigation, quiz, simulation, story, kana, and audio suites.

## Kotoba review and examples (30 October 2026)

The imported baseline above contains 4,535 cards. The presentation layer now merges
241 kana/kanji spelling variants with identical readings and shared senses, leaving
4,294 N4 cards. The 411 enrichment-source cards are retained. Homophones with
different readings or distinct kanji remain separate; N5 and N4 retain their own
level-specific review cards. The merge ledger is `kotoba-duplicate-review.json`;
`mergedIds` redirects old saved cards and detail links to their surviving IDs.

All 4,294 N4 cards now have Japanese, kana, and Indonesian example fields. Added
examples combine authored counter/dialogue/adjective/adverb examples with repeatable
sentence frames for nouns and verbs. Abstract or ambiguous nouns use the neutral
`Nについて教えてください` frame rather than guessing a physical use. These are
learning examples, not quotations from the source PDFs. This does not constitute
an exhaustive linguistic certification of every source gloss or classification.

`build-kotoba-n4.py` now runs the retained completion layer automatically, then
`build-kotoba-data.py` emits the browser bundle. Calling the completion layer again
is idempotent. Examples in the authored files are plain kana to suit beginners.

The detail-page source disclosure and Premium placeholder/route were removed.
No Free/Premium access system is enabled in this application. Source attribution
remains in the canonical dataset for maintenance. Verification: all 32 Node test
suites pass, including example coverage, bundles, counter notation, homophones,
saved-ID migration, detail rendering, navigation, and unchanged audio imports.

## Revised level policy (30 October 2026)

The user superseded the earlier cross-level review-card policy: N4 must exclude
words already available in N5. Exact filler/interjection headwords are removed
in both levels; demonstratives, greetings, and useful yes/no responses remain.
The final counts are N5 1,794 and N4 3,419. Removed: 7 N5 fillers, 21 N4 fillers,
and 854 N4 duplicates. The full removal ledger is kotoba-level-policy-audit.json.
Homophones are not removed by reading alone. Spelling variants with differing
Indonesian translations are supplemented by an explicit reviewed mapping.

The kana こい card mixed love and strong flavor: it now teaches the distinct noun
恋 (love), with its own example; 濃い remains in N5. Previous saved-card redirects
now resolve to N5 when the merged word is removed from N4, preserving favorites
without showing N5 content in the N4 list. Deleted fillers have no replacement.

Of the original 411 daily-source N4 cards, 404 remain; seven are removed by the
new policy. Their full records remain in the ledger, and all original source rows
are retained. The new rule intentionally supersedes the exact-411 displayed quota.
`build-kotoba-data.py` applies the policy automatically before emitting bundles.
All 33 Node test suites pass, including no recognized cross-level duplicates,
removed filler coverage, protected different meanings, accounting, and idempotence.
