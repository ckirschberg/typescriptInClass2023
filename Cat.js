"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
var Gender_1 = require("./Gender");
var Cat = /** @class */ (function () {
    //name: string;
    function Cat(name, gender) {
        this.name = name;
        this.gender = gender;
        //this.name = name;
    }
    Cat.prototype.meow = function (message) {
        console.log("Meow: " + message);
    };
    Cat.prototype.isFemale = function () {
        return this.gender === Gender_1.Gender.Female;
        // if (this.gender.toLowerCase() === "female") {
        //     return true;
        // } else {
        //     return false;
        // }
    };
    return Cat;
}());
exports.Cat = Cat;
