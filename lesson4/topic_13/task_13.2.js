/*Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят alert с одинаковыми значениями или нет?
Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert( i );

Постфиксный вариант i++
let i = 0;
while (i++ < 5) alert( i );*/

let i = 0;
while (++i < 5) console.log( i ); // 1 2 3 4

let y = 0;
while (y++ < 5) console.log( y ); // 1 2 3 4 5