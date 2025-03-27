/*Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Например:
nap - pan
ear - are - era
cheaters - hectares - teachers

Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.*/

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
    let map = new Map();

    arr.forEach(word => {
        let sortedWord = word.toLowerCase().split('').sort().join('');
        map.set(sortedWord, word);
    });

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let anagrams = aclean(arr);
console.log(anagrams);

