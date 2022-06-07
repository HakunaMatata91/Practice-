import {Creature} from "./Creature.js";

class Elephant extends Creature {
    constructor(name, age, maxAge, mass, cameFrom, foodPerDay) {
        super(name, age, maxAge, mass, cameFrom, foodPerDay);
    }

    getCreatureType() {
        return `ELEPHANT`;
    }
} export {Elephant}