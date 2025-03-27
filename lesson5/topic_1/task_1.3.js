/*Можно ли изменить объект, объявленный с помощью const? Как вы думаете?*/
// Ответ: можно
var passport = {
    username: 'Smith',
    surname: 'John'
};
passport.username = 'Vitya';
console.log(passport);
