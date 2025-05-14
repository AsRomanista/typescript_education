// Создание классов

// class User {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
// }
//
// const user = new User('John')
// console.log(user);
// user.name = 'Dima';
// console.log(user);
//
// class Admin {
//     role: number;
// }
//
// const admin = new Admin()
// admin.role = 1;

// constructor

// class User {
//     name: string;
//     age: number;
//
//     constructor();
//     constructor(name: string);
//     constructor(age: number);
//     constructor(name: string, age: number);
//     constructor(ageOrName?: string | number, age?: number) {
//         if (typeof ageOrName === "string") {
//             this.name = ageOrName;
//         } else if (typeof ageOrName === "number") {
//             this.age = ageOrName;
//         }
//         if (typeof age === "number") {
//             this.age = age;
//         }
//     }
// }
//
// const user = new User('John')
// const user4 = new User('John', 33)
// const user2 = new User();
// const user3 = new User(33);

// class methods

// enum PaymentStatus {
//     Holded,
//     Processed,
//     Reversed
// }
//
// class Payment {
//     id: number;
//     status: PaymentStatus = PaymentStatus.Holded;
//     createdAt: Date = new Date();
//     updatedAt: Date;
//
//     constructor(id: number) {
//         this.id = id;
//     }
//
//     getPaymentLifeTime(): number {
//         return new Date().getTime() - this.createdAt.getTime();
//
//     }
//
//     unholdPayment(): void {
//         if (this.status === PaymentStatus.Processed) {
//             throw new Error('Payment cannot be returned');
//         }
//         this.status = PaymentStatus.Reversed;
//         this.updatedAt = new Date();
//     }
// }
//
// const payment = new Payment(1)
// payment.unholdPayment();
// console.log(payment);
// const time = payment.getPaymentLifeTime();
// console.log(time);

// class User {
//     skills: string[];
//
//
//     constructor(skills: string[]) {
//         this.skills = skills;
//     }
//
//     addSkill(skill: string): void;
//     addSkill(skills: string[]): void;
//     addSkill(skillOrSkills: string | string[]): void {
//         if (typeof skillOrSkills === 'string') {
//             this.skills.push(skillOrSkills);
//         } else {
//             this.skills.concat(skillOrSkills);
//         }
//     }
// }
//
// function run(distance: string): string
// function run(distance: number): number
// function run(distance: number | string): number | string {
//     if (typeof distance === 'string') {
//         return '';
//     } else
//         return 1;
// }

// Getter and Setter

// class User {
//     _login: string;
//     password: string;
//
//     set login(l: string) {
//         this._login = 'user-' + l;
//     }
//
//     get login(): string {
//         return 'no_login';
//     }
// }
//
// const user = new User();
// user.login = 'myLogin';
//
// console.log(user);
// console.log(user.login);

// Implements

// interface ILogger {
//     log(...args: any[]): void;
//     error(...args: any[]): void;
// }
//
// class Logger implements ILogger {
//     log(args: any[]): void {
//         console.log(...args);
//     }
//     error(args: any[]): void {
//         // Кинуть во внешнюю систему
//         console.log(...args);
//     }
//
// }
//
// interface IPayable {
//     pay(paymentId: number): void;
//     price?: number;
// }
//
// class User implements IPayable {
//     pay(paymentId: number): void {
//        ///
//     }
// }
//
// interface IDeletable {
//     delete(): void;
// }
//
// class User implements IPayable, IDeletable {
//     delete(): void {
//         throw new Error("Method not implemented.");
//     }
//     pay(paymentId: number): void {
//         throw new Error("Method not implemented.");
//     }
// }

// Extends

// type PaymentStatus = 'new' | 'paid';
//
// class Payment {
//     id: number;
//     status: PaymentStatus = 'new';
//
//     constructor(id: number) {
//         this.id = id;
//     }
//
//     pay() {
//         this.status = 'paid';
//     }
// }
//
// class PersistedPayment extends Payment {
//     databaseId: number;
//     paidAt: Date;
//
//     constructor() {
//         const id = Math.random();
//         super(id);
//     }
//
//     save() {
//         // сохраняет в базу
//     }
//
//     override pay(date?: Date) {
//         super.pay()
//         if (date) {
//             this.paidAt = date;
//         }
//     }
// }
//
// new PersistedPayment();
//
// class User {
//     name: string = 'user'
//
//     constructor() {
//         console.log(this.name);
//     }
// }
//
// class Admin extends User {
//     name: string = 'admin';
//
//     constructor() {
//         super();
//         console.log(this.name);
//     }
// }
//
// new Admin();
//
// new Error('')
//
// class HttpError extends Error {
//     code: number;
//
//     constructor(message: string, code?: number) {
//         super(message);
//         this.code = code ?? 500
//     }
// }

// class User {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
// }
//
// class Users extends Array<User> {
//     searchByName(name: string) {
//         return this.filter(u => u.name === name);
//     }
//
//     override toString(): string {
//         return this.map(u => u.name).join(', ')
//     }
// }
//
// const users = new Users();
// users.push(new User('Вася'))
// users.push(new User('Петя'))
// console.log(users.toString())
//
//
// // композиция
// class UserList {
//     users: User[];
//
//     push(u: User) {
//         this.users.push(u)
//     }
// }
//
// class Payment {
//     date: Date;
// }
//
// class UserWithPayment2 {
//     user: User;
//     payment: Payment;
//
//     constructor(user: User, payment: Payment) {
//         this.payment = payment;
//         this.user = user;
//     }
// }

// Видимость свойств и методов класса

// class Vehicle {
//     public make: string;
//     private damages: string[];
//     private _model: string;
//     protected run: number;
//     #price: number; // = private
//
//     private addDamage(damage: string) {
//         this.damages.push(damage);
//     }
//
//     set model(m: string) {
//         this._model = m;
//     }
//
//     get model() {
//         return this._model;
//     }
//
//     isPriceEqual(v: Vehicle) {
//         return this.#price === v.#price
//     }
// }
//
// class EuroTruck extends Vehicle {
//     setRun(km: number)  {
//         this.run = km / 0.62;
//     }
// }
//
// new Vehicle()

// задание

// class Product {
//     constructor(
//         public id: number,
//         public title: string,
//         public price: number
//     ) { }
// }
//
// class Delivery {
//     constructor(
//         public date: Date
//     ) { }
// }
//
// type ChooseDelivery = HomeDelivery | ShopDelivery;
//
// class HomeDelivery extends Delivery {
//     constructor(
//         date: Date,
//         public address: string
//     ) {
//         super(date);
//     }
// }
//
// class ShopDelivery extends Delivery {
//     constructor(
//         date: Date,
//         ShopId: number
//     ) {
//         super(new Date());
//     }
// }
//
// class Cart {
//     private products: Product[] = [];
//     private delivery: ChooseDelivery;
//
//     public addProduct(product: Product): void {
//         this.products.push(product);
//     }
//
//     public deleteProduct(productId: number): void {
//         this.products = this.products.filter((p: Product) => p.id !== productId);
//     }
//
//     public getSum(): number {
//         return this.products
//             .map((p: Product) => p.price)
//             .reduce((p1: number, p2: number) => p1 + p2, 0);
//     }
//
//     public setDelivery(delivery: ChooseDelivery): void {
//         this.delivery = delivery;
//     }
//
//     public checkOut() {
//         if (this.products.length === 0) {
//             throw new Error('Product empty');
//         }
//         if (!this.delivery) {
//             throw new Error('No choosing delivery');
//         }
//         return { success: true };
//     }
// }

// const cart = new Cart();
// cart.addProduct(new Product(1, 'Cake', 30));
// cart.addProduct(new Product(2, 'Cookies', 40));
// cart.addProduct(new Product(3, 'Banan', 10));
// cart.deleteProduct(2)
// cart.setDelivery(new HomeDelivery(new Date (), 'Lida'))
// console.log(cart.getSum());
// console.log(cart.checkOut());

// static features
// class UserService {
//     public static db: any;
//
//     static getUser(id: number) {
//         return UserService.db.findById(id);
//     }
//
//     constructor(id: number) {  }
//
//     create() {
//         UserService.db;
//     }
//
//     static {
//         UserService.db = 'qwerty'
//     }
// }


// не надо создавать отдельный инстанс, а сразу обращаемся к свойсвам
// UserService.db
// UserService.getUser(1)
// const inst = new UserService(1);
// inst.create()

// this

// class Payment {
//     private date: Date = new Date();
//
//     getDate(this: Payment) {
//         return this.date;
//     }
//
//     getDateArrow = () => {
//         return this.date;
//     }
// }
//
// const p = new Payment();
//
// const user = {
//     id: 1,
//     paymentDate: p.getDate.bind(p),
//     paymentDateArrow: p.getDateArrow
// }

// console.log(p.getDate());
// console.log(user.paymentDate());
// console.log(user.paymentDateArrow());

// class PaymentPersistent extends Payment {
//     save() {
//         return this.getDateArrow()
//     }
// }
//
// console.log( new PaymentPersistent().save() );


