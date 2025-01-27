/*Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/
function checkMin(a, b) {
    return a < b ? console.log(a) : console.log(b);
}
checkMin(2, 5);
checkMin(3, -1);
checkMin(1, 1);
