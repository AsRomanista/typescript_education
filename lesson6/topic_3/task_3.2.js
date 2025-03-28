/*Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false*/

function checkSpam(str) {
    return (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('XXX'.toLowerCase()));
}

console.log( checkSpam('buy ViAgRA now') ); // true
console.log( checkSpam('free xxxxx') ); // true
console.log( checkSpam("innocent rabbit") ); // false