/*Можно ли изменить объект, объявленный с помощью const? Как вы думаете?*/

// Ответ: можно

const passport = {
    username: 'Smith',
    surname: 'John'
}

passport.username = 'Vitya';

console.log(passport);

