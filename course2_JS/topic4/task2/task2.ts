// void - ничего не возвращает

// function logId(id: string | number): void {
//     console.log(id);
// }
//
// const skills = ['DEV', 'DevOps']
//
// const user = {
//     s: []
// }
//
// skills.forEach((skills) => user.s.push(skill));

// unknown - это еще один тип данных, который был введен в TypeScript, а не в самом JavaScript.

// let input: unknown;
//
// input = 3
// input = 'hello world'
//
// function run(i: unknown) {
//     if (typeof i == 'number') {
//         i++
//     } else {
//         i
//     }
// }
//
// run(input);
//
// async function getData() {
//     try {
//         await fetch('');
//     } catch (error) {
//         if (error instanceof Error) {
//             console.log(error.message);
//         }
//     }
// }
//
// async function getDataForce() {
//     try {
//         await fetch('');
//     } catch (error) {
//         const e = error as Error;
//         console.log(e.message);
//     }
// }
//
// type U1 = unknown | number; // самый широкий тип unknown
//
// type I1 = unknown & string; // самый узкий string

// never - используется для обозначения значений, которые никогда не должны происходить (для обработки ошибок)

// function generateError(message: string): never {
//     throw new Error(message);
// }
//
// function dumpError(): never {
//     while(true) {}
// }
//
// function rec(): never {
//     return rec()
// }
//
// type paymentAction = 'refund' | 'checkout' | 'reject';
//
// function processAction(action: paymentAction) {
//     switch (action) {
//         case 'refund':
//             // ...
//             break;
//         case 'checkout':
//             // ...
//             break;
//         case 'reject':
//             // ...
//             break;
//         default:
//             const _: never = action;
//             throw new Error('Unknown payment action');
//     }
// }
//
//
// function isString(x: string | number): boolean {
//     if (typeof x === 'string') {
//         return true
//     } else if(typeof x === 'number') {
//         return false
//     }
//     generateError('Unknown payment action'); // исчерпывающая проверка
// }

// null - осознано возвращаем, что этого объекта нет (явный возврат) | undefined - нет такого объекта, свойства (неявный)

import {strict} from "node:assert";

// const n123: null = null;
//
// interface User {
//     name: string;
// }
//
// function getUser() {
//     if (Math.random() > 0.5) {
//         return null;
//     } else {
//         return {
//             name: "John"
//         } as User;
//     }
// }
//
// const user = getUser();
// if (user) {
//     const n55 = user.name;
// }

// приведение типов

// let a = 5;
// let b: string = a.toString();
//
// let e:string = new String(a).valueOf();
// let f:boolean = new Boolean(a).valueOf();
//
// let c = 'fdsfsd'
// let d: number = parseInt(c);
//
// interface User {
//     name: string;
//     email: string;
//     login: string;
// }
//
// const user: User = {
//     name: 'John',
//     email: 'john@gmail.com',
//     login: 'john'
// }

// const user = <User> { // не рекомендуют
//     name: 'John',
//     email: 'john@gmail.com',
//     login: 'john'
// }

// interface Admin {
//     name: string;
//     role: number;
// }
//
// const admin: Admin = { // берешь все свойства юзера
//     ...user,
//     role: 1
// }
//
// function userToAdmin(user: User): Admin {
//     return {
//         name: user.name,
//         role: 1
//     }
// }

// typeguard

// function logId(id: string |  number) {
// 	if (isString(id)) {
//         console.log(id);
//     } else {
//         console.log(id);
//     }
// }
//
// function isString(x: string | number): x is string {
//     return typeof x === "string";
// }
//
// function isAdmin(user: User | Admin): user is Admin {
//     return 'role' in user;
// }
//
// function setRole(user: User | Admin) {
//     if (isAdmin(user)) {
//         user.role = 0;
//     } else {
//         throw new Error('User is not admin');
//     }
// }

interface IPayment {
    sum: number,
    from: number,
    to: number
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

function isSuccess(res: IResponseSuccess | IResponseFailed): res is IResponseSuccess {
    if (res.status === PaymentStatus.Success) {
        return true;
    }
    return false;
}

function CheckStatus(res: IResponseSuccess | IResponseFailed): number {
    if (isSuccess(res)) {
        return res.data.databaseId
    } else {
        throw new Error(res.data.errorMessage);
    }

}

