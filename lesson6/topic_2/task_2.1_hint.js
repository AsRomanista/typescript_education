let num = 255;

console.log( num.toString(16) );  // ff
console.log( num.toString(2) );   // 11111111

let floatNumber = 1.56999

console.log( Math.floor( floatNumber ) ); // Округление в меньшую сторону = 1
console.log( Math.ceil( floatNumber ) ); // Округление в большую сторону = 2
console.log( Math.round( floatNumber ) ); // Округление до ближайшего целого = 2
console.log( Math.trunc( floatNumber ) ); // Производит удаление дробной части без округления = 1

console.log( floatNumber.toFixed(3)); // округляет число до n знаков
// после запятой и возвращает строковое представление = 1.570

console.log( parseInt('0xff', 16) ); // 255
console.log( parseFloat('12.3.4') ); // 12.3

console.log( Math.random() ); // 0.1234567894322
// Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)

console.log( Math.max(3, 5, -10, 0, 1) ); // 5
// Возвращает наибольшее/наименьшее число из перечисленных аргументов.

console.log( Math.pow(2, 10) ); // 2 в степени 10 = 1024
// Возвращает число n, возведённое в степень power
