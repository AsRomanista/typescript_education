// this type
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.printDate = function (date) {
        this.log(date.toString());
    };
    return Logger;
}());
var MyLogger = /** @class */ (function (_super) {
    __extends(MyLogger, _super);
    function MyLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyLogger.prototype.log = function (message) {
        console.log(message);
    };
    MyLogger.prototype.logWithDate = function (message) {
        this.printDate(new Date());
        this.log(message);
    };
    return MyLogger;
}(Logger));
var logger = new MyLogger();
logger.logWithDate('Hello');
