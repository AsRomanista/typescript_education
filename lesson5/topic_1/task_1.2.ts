/*Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.*/

function isEmpty(obj: any): boolean {
    for (let key in obj) {
        return false;
    }
    return true;
}