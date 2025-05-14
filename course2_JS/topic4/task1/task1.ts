// union

// function logId(id: string | number | boolean) {
//     if (typeof id === "string") {
//         console.log(id);
//     } else if (typeof id === "number") {
//         console.log(id);
//     } else {
//         console.log(id);
//     }
// }
//
// function logError(err: string | string[]) {
//     if (Array.isArray(err)) {
//         console.log(err);
//     } else {
//         console.log(err);
//     }
// }
//
// function logObj(obj: { a: number } | { b: number }) {
//     if ('a' in obj) {
//     console.log(obj.a);
//     } else {
//         console.log(obj.b);
//     }
// }
//
// logId("Hello World!");
// logId(1);
// logId(true);

// literal types

// function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
//     return 1;
// }
//
// let method = 'post'
//
// fetchWithAuth('1', method as 'post')

// type Aliases
// type httpMethod = 'post' | 'get';
//
// function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
//     return 1;
// }
//
// type User = {
//     name: string,
//     age: number,
//     skills: string[]
// }
//
// type Role = {
//     id: number
// }
//
// type UserWithRole = User & Role
//
// let user1: UserWithRole = {
//     name: 'Pete',
//     age: 33,
//     skills: ['1', '2'],
//     id: 1
// }

// Interfaces

// interface User {
//     name: string,
//     age: number,
//     skills: string[],
//     log: (id: number) => string;
// }
//
// interface Role {
//     roleId: number
// }
//
// interface UserWithRole extends User, Role {
//     createdAt: Date
// }
//
// let user1: UserWithRole = {
//     name: 'Pete',
//     age: 33,
//     skills: ['1', '2'],
//     roleId: 1,
//     createdAt: new Date(),
//     log(id) {
//         return '';
//     }
// }
//
// interface UserDic {
//     [index: number]: User;
// }

// Optional

// function multiply(first: number, second?: number) {
//     if (!second) {
//         return first * first;
//     }
//     return first * second;
// }
//
// console.log(multiply(2));
//
// interface UserPro {
//     login: string;
//     password?: {
//         type: 'primary' | 'secondary';
//     }
// }
//
// function testPass(user: UserPro) {
//     const t = user.password?.type;
// }
//
// function test(param?: string) {
//     const t = param ?? multiply(5); // ?? - если null или undefined то выполняем умножение на 5
// }

// interface IPayment {
//     sum: number,
//     from: number,
//     to: number
// }
//
// interface IPaymentRequest extends IPayment { }
//
// enum PaymentStatus {
//     Success = 'success',
//     Failed = 'failed'
// }
//
// interface IDataSuccess extends IPayment {
//     databaseId: number
// }
//
// interface IDataFailed extends IPayment {
//     databaseId: {
//         errorMessage: string,
//         errorCode: number
//     }
// }
//
// interface IResponseSuccess {
//     status: PaymentStatus.Success,
//     data: IDataSuccess
// }
//
// interface IResponseFailed {
//     status: PaymentStatus.Failed,
//     data: IDataFailed
// }

// interface Payment {
//     sum: number,
//     from: number,
//     to: number
// }
//
// interface IPaymentRequest extends Payment { }
//
// enum IPaymentStatus {
//     Success = 'success',
//     Failed = 'failed',
// }
//
// interface IPaymentResponseSuccess extends Payment{
//     status: IPaymentStatus.Success,
//     data: {
//         databaseId: number
//     }
// }
//
// interface IPaymentResponseFaided {
//     status: IPaymentStatus.Failed,
//     data: {
//         erorrMessage: string,
//         errorCode: number
//     }
// }