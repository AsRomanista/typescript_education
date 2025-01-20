/*У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.*/
var salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
var sum = 0;
if (Object.values(salaries).length > 0) {
    for (var _i = 0, _a = Object.values(salaries); _i < _a.length; _i++) {
        var values = _a[_i];
        sum += values;
    }
}
console.log(sum);
