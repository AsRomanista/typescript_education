"use strict";
/*Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.*/
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
