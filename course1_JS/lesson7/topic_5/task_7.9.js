/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов.*/

let arr = [1, 2, 3];

function shuffle(array) {
    // Проходим по массиву с конца к началу
    for (let i = array.length - 1; i > 0; i--) {
        // Генерируем случайный индекс j, который меньше или равен i
        let j = Math.floor(Math.random() * (i + 1));

        // Меняем местами элементы на индексах i и j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log(shuffle(arr));