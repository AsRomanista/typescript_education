/*Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";*/

function ucFirst(word) {
    if (!word) return word;

    return word[0].toUpperCase() + word.slice(1);
}

console.log( ucFirst('вася') );