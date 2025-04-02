/*Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2*/

function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
};

console.log( count(user) ); // 2*/