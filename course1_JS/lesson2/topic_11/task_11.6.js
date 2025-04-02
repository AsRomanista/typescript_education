/*Что выведет код ниже?
let value = NaN;
value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;
alert(value);*/

let value = NaN;
value &&= 10; // false
value ||= 20; // == 20
value &&= 30; // == 30
value ||= 40;
console.log(value); // 30