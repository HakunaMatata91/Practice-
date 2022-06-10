import {Creature} from "./Creature.js";

class Panda extends Creature {
    constructor(name, age, maxAge, mass, cameFrom, foodPerDay) {
        super(name, age, maxAge, mass, cameFrom, foodPerDay);
    }

    getCreatureType() {
        return `PANDA`;
    }
} export {Panda}