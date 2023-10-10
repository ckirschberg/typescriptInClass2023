import { Cat } from "./Cat";
import { Gender } from "./Gender";
import { Person } from "./Person";


let person1 = new Person('Christian', 'kirs@cphbusiness.dk')
let person2 = new Person('Michelle', 'm.k@jubii.dk')

let newCats: Cat[] = [
    new Cat("Charlie", Gender.Male),
    new Cat("Molly", Gender.Female),
    new Cat("Gordon", Gender.Male),
    new Cat("Tom", Gender.Male)
]
person1.addMultipleCats(newCats)
//person1.addCat(person2); // type error

newCats[0].meow('I am hungry, feed me!');

console.log("cat1 is a " + newCats[0].isFemale());
console.log("cat2 is a " + person1.cats[1].isFemale());


person1.showCats();
const email: string = person2.getEmail();
console.log(email);

const cats: Cat[] = person1.getCats();

