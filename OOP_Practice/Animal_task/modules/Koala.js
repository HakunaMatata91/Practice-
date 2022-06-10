import {Creature} from "./Creature.js";

class Koala extends Creature {
    constructor(name, age, maxAge, mass, cameFrom, foodPerDay) {
        super(name, age, maxAge, mass, cameFrom, foodPerDay);
    }

    getCreatureType() {
        return `KOALA`;
    }
} export {Koala}