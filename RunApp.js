"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat_1 = require("./Cat");
var Gender_1 = require("./Gender");
var Person_1 = require("./Person");
var person1 = new Person_1.Person('Christian', 'kirs@cphbusiness.dk');
var person2 = new Person_1.Person('Michelle', 'm.k@jubii.dk');
var newCats = [
    new Cat_1.Cat("Charlie", Gender_1.Gender.Male),
    new Cat_1.Cat("Molly", Gender_1.Gender.Female),
    new Cat_1.Cat("Gordon", Gender_1.Gender.Male),
    new Cat_1.Cat("Tom", Gender_1.Gender.Male)
];
person1.addMultipleCats(newCats);
//person1.addCat(person2); // type error
newCats[0].meow('I am hungry, feed me!');
console.log("cat1 is a " + newCats[0].isFemale());
console.log("cat2 is a " + person1.cats[1].isFemale());
person1.showCats();
var email = person2.getEmail();
console.log(email);
var cats = person1.getCats();
