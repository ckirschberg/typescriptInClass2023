"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, email) {
        this.cats = [];
        this.name = name;
        this.email = email;
    }
    Person.prototype.addCat = function (cat) {
        this.cats.push(cat);
    };
    Person.prototype.addMultipleCats = function (cats) {
        // js- spread operator
        // this.cats = [...this.cats, ...cats];
        this.cats = this.cats.concat(cats);
        // cats.forEach(cat => {
        //     this.cats.push(cat);
        // })
    };
    Person.prototype.getEmail = function () {
        return this.email;
    };
    Person.prototype.getCats = function () {
        return this.cats;
    };
    Person.prototype.showCats = function () {
        this.cats.forEach(function (cat) {
            console.log(cat.name + " " + cat.gender);
        });
        // console.log(this.cats);
    };
    return Person;
}());
exports.Person = Person;
