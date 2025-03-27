/* Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ? */

let arr = ["a", "b"];

arr.push(function() {
    console.log( this );
});

arr[2](); // [ 'a', 'b', [Function (anonymous)] ]  в массив добавили функцию в конец как объект

