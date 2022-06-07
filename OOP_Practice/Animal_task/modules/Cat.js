// 3. Сделать класс Cat, наследующий Creature,  метод - getCreatureType()
import {Creature} from "./Creature.js";

class Cat extends Creature {
    constructor(name, age, maxAge, mass, cameFrom, foodPerDay) {
        super(name, age, maxAge, mass, cameFrom, foodPerDay);
    }

    getCreatureType() {
        return `CAT`;
    }
} export {Cat}