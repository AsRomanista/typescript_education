/*Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).*/

let x: number = parseInt(prompt('Fill in x') || '0');
let n: number = parseInt(prompt('Fill in n') || '0');

function pow(x: number, n: number) {
    return console.log(x ** n);
}

pow(2, 3);