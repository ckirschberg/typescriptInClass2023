import { Gender } from "./Gender";

export class Cat {
    //name: string;

    constructor(public name: string, public gender: Gender) {
        //this.name = name;
    }

    meow(message: string) : void {
        console.log("Meow: " + message);
    } 

    isFemale() : boolean {
        return this.gender === Gender.Female;

        // if (this.gender.toLowerCase() === "female") {
        //     return true;
        // } else {
        //     return false;
        // }
    }

}