import { Cat } from "./Cat";

export class Person {
    name: string; // attribute
    email: string;
    cats: Cat[] = []

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    addCat(cat: Cat) : void {
        this.cats.push(cat);
    }
    addMultipleCats(cats: Cat[]) : void {
        // js- spread operator
        // this.cats = [...this.cats, ...cats];

        this.cats = this.cats.concat(cats);

        // cats.forEach(cat => {
        //     this.cats.push(cat);
        // })
    }

    getEmail() : string {
        return this.email;
    }

    getCats() : Cat[] {
        return this.cats;
    }

    showCats() : void {
        this.cats.forEach((cat) => {
            console.log(cat.name + " "  + cat.gender);
            
        });

        // console.log(this.cats);
    }

}