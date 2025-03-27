// let fruits = ["Apple", "Orange", "Plum"];
// // то же самое, что и fruits[fruits.length-1]
// console.log( fruits.at(-1) ); // Plum
//
// // pop
// // Удаляет последний элемент из массива и возвращает его:
//
// let fruitss = ["Яблоко", "Апельсин", "Груша"];
//
// console.log( fruitss.pop() ); // удаляем "Груша" и выводим его
//
// console.log( fruitss ); // Яблоко, Апельсин
//
// // push
// // Добавляет элемент в конец массива:
//
// let fruitsss = ["Яблоко", "Апельсин"];
//
// fruitsss.push("Груша");
//
// console.log( fruitsss ); // Яблоко, Апельсин, Груша
//
// // shift
// // Удаляет из массива первый элемент и возвращает его:
// console.log( fruits.shift() ); // удаляем Яблоко и выводим его
//
// // unshift
// // Добавляет элемент в начало массива:
//
// fruits.unshift('Яблоко');
//
// // Перебор элементов
// // 1
// let arr = ["Яблоко", "Апельсин", "Груша"];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log( arr[i] );
// }

// 2
let fruits = ["Яблоко", "Апельсин", "Слива"];

// проходит по значениям
for (let fruit of fruits) {
    console.log( fruit );
}