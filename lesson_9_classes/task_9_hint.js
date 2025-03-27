class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log("Hello", this.name);
    }
}

console.log(typeof User);

let user = new User('Dima');
user.sayHello();

// getter
/*Геттер (getter) — это метод, который позволяет получить значение приватного (или защищенного) свойства объекта.
Он обычно имеет имя, начинающееся с "get", и возвращает значение соответствующего свойства.
Например, если у вас есть свойство name, геттер может выглядеть так:*/

class Person1 {
    constructor(name) {
        this._name = name; // Приватное свойство
    }

    get name() {
        return this._name; // Возвращает значение свойства
    }
}

// setter
/*Сеттер (setter) — это метод, который позволяет установить значение приватного свойства объекта.
Он обычно имеет имя, начинающееся с "set", и принимает значение в качестве параметра.
Сеттер может включать логику проверки или изменения значения перед его установкой. */

class Person2 {
    constructor(name) {
        this._name = name; // Приватное свойство
    }

    set name(newName) {
        this._name = newName; // Устанавливает новое значение свойства
    }
}

class User1 {
    name = "Аноним";

    sayHi() {
        console.log(`Привет, ${this.name}!`);
    }
}

new User1().sayHi();
