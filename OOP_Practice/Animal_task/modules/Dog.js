import {Creature} from "./Creature.js";


class Dog extends Creature {
    constructor(name, age, maxAge, mass, cameFrom, foodPerDay) {
        super(name, age, maxAge, mass, cameFrom, foodPerDay);
    }

    getCreatureType() {
        return `DOG`;
    }
} export {Dog}
