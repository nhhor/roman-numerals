# Roman Numerals


### Specs:

|Spec|Input|Output|
|-|-|-|
|If the number is 1-3, use an 'i' for each of those numbers number|3|iii|
|If the number is 4-8, use v +- 'i's |4|iv|
|If the number is 9-39, use base X(10), (and run previous rules)|39|XXXIX|
|If the number is 40-89, use base L(50), (and run previous rules) )|89|LXXXIX|
|If the last number is 90-189, use base C(100), (and run previous rules)|189|CLXXXIX|
|If the last number is 190-399, use base C^(100), (and run previous rules)|399|CCCXCIX|
|If the last number is 190-399, use base D(500), (and run previous rules)|899|DCCCXCIX|
|If the last number is 900-3999, use base M(1000), (and run previous rules)|3999|MMMCMXCIX|




|number|numeral| range | % modullo or remainder?|
| - | - | - | - |
| 1	| I |1-3||
| 5	| V |4-8|# % 5 === 0|
| 10	| X |9-39| #(Bx) % 10?|
| 50	| L |40-89| if # / (L-10) >= 1): use L code|
| 100	| C |90-189||
| 100^	| C^ |190-399||
| 500	| D |400-899||
| 1,000	| M |900-3999||
