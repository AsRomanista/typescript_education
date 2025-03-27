// Map – это коллекция ключ/значение, как и Object.
// Но основное отличие в том, что Map позволяет использовать ключи любого типа.

/*Методы и свойства:

new Map() – создаёт коллекцию.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.*/

// let map = new Map();
//
// map.set("1", "str1");    // строка в качестве ключа
// map.set(1, "num1");      // цифра как ключ
// map.set(true, "bool1");  // булево значение как ключ
//
// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// console.log(map.get(1)); // "num1"
// console.log(map.get("1")); // "str1"
// console.log(map.get(true)); // "bool1"
// console.log(map.size); // 3
//
// // Перебор MAP
//
// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук",    50]
// ]);

// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // огурец, помидор, лук
// }

// // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
// }
//
// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
//     console.log(entry); // огурец,500 (и так далее)
// }
//
// recipeMap.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`); // огурец: 500 и так далее
// });

// если хотим из обычного объекта создать MAP Object.entries

// let obj = {
//     name: "John",
//     age: 30
// };
//
// let map = new Map(Object.entries(obj));
//
// console.log( map.get('name') ); // John
//
// // из массива в объект Object.fromEntries
//
// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ]);
//
// // prices = { banana: 1, orange: 2, meat: 4 }
//
// console.log(prices.orange); // 2

// SET - Объект Set – это особый вид коллекции: «множество» значений (без ключей),
// где каждое значение может появляться только один раз.

/*Его основные методы это:

new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив),
то копирует его значения в новый Set.
set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
set.clear() – удаляет все имеющиеся значения.
set.size – возвращает количество элементов в множестве.*/

// перебор объекта в set

let set = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set) console.log(value);

// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
    console.log(value);
});

/*Set имеет те же встроенные методы, что и Map:

set.values() – возвращает перебираемый объект для значений,
set.keys() – то же самое, что и set.values(), присутствует для обратной совместимости с Map,
set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.*/