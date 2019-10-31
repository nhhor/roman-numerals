# Roman Numerals


### Specs:

|Spec|Input|Output|
|-|-|-|
|If the last number is 1-3, use an 'i' for each of those numbers number|3|iii|
|If the last number is 4, use -i+v (-1+5)|4|iv|
|If the last number is 4, use v|5|v|
|If the last number is 6-8, use v+ii (5+1+1)|7|vii|
|If the last number is 9, use -i+x (-1+10)|9|ix|






|number|numeral| range | % modullo |
| - | - | - | - |
| 1	| I |1-3||
| 5	| V |4-8|# % 5 === 0|
| 10	| X |9-39| #(Bx) % 10?|
| 50	| L |40-89| if # / (L-10) >= 1): use L code|
| 100	| C |90-189||
| 100^	| C^ |190-399||
| 500	| D |400-899||
| 1,000	| M |900-3999||
