/*Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор ||*/

// first variant with ?
function checkAge(age: number) : boolean {
        return (age > 18) ? true : confirm('Родители разрешили?');
}

// second variant with ||
function checkAge1(age: number) : boolean {
        return (age > 18) || confirm('Родители разрешили?');
}