/*Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.*/

// можно если будет возвращать один и тот же объект вместо this

let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() === new B() ); // true