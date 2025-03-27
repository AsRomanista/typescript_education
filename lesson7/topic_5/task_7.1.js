/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.*/

function camelize(str) {
    let splitText = str.split('-')
        .map((word, index) => {
            if (index === 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
    let myShortString = splitText.join('');
    return myShortString;
}

console.log(camelize("background-color")) // == 'backgroundColor';