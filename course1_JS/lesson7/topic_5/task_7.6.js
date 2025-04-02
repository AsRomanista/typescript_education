/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.*/

function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (str) {
        let splitValue = str.split(' ')
        a = +splitValue[0]
        let marks = splitValue[1]
        b = +splitValue[2]
        return this.methods[marks](a, b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}


let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8