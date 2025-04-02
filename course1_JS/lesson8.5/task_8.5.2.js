/*У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.*/

let salaries = {
    "John": 200,
    "Pete": 300,
    "Mary": 100
};

function topSalary(salaries) {
    if (Object.keys(salaries).length === 0) {
        return null;
    }

    let maxSalary = 0;
    let topEmployee = "";

    for (let [key, value] of Object.entries(salaries)) {
        if (value > maxSalary) {
            maxSalary = value;
            topEmployee = key;
        }
    }

    return topEmployee;

}

console.log(topSalary(salaries));