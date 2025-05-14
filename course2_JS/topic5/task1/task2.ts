// this type

// class UserBuilder {
//     name: string;
//
//     setName(name: string): this {
//         this.name = name;
//         return this;
//     }
//
//     // type guard
//     isAdmin(): this is AdminBuilder {
//         return this instanceof AdminBuilder;
//     }
// }
//
// class AdminBuilder extends UserBuilder {
//     roles: string[];
// }
//
// const res = new UserBuilder().setName('John')
// const res1 = new AdminBuilder().setName('Vasya')
//
// let user: UserBuilder | AdminBuilder = new UserBuilder();
//
// if (user.isAdmin()) {
//     console.log(user);
// } else {
//     console.log(user);
// }

// abstract methods and classes

// abstract class Controller {
//     abstract handle(req: any): void;
//
//     handleWithLogs(req: any) {
//         console.log('Start');
//         this.handle(req);
//         console.log('End');
//     }
// }
//
// class UserController extends Controller {
//     handle(req: any): void {
//         console.log(req);
//     }
// }
//
// // new Controller() - error
//
// const c = new UserController();
// c.handleWithLogs('Request');

// task

abstract class Logger {
    abstract log(message: string): void;

    printDate(date: Date): void {
        this.log(date.toString());
    }
}

class MyLogger extends Logger {
    log(message: string): void {
        console.log(message)
    }

    logWithDate(message: string): void {
        this.printDate(new Date());
        this.log(message);
    }
}

const logger = new MyLogger();
logger.logWithDate('Hello');
