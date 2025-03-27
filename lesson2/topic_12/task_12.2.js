/*Что будет выведено в итоге?
let city = null;
city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city);*/

let city = null;
city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

console.log(city); // "Берлин"