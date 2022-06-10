//
//Сделать новый класс Zoo внутри которого мы будем хранить массив всех животных нашего зоопарка. Создать массив creatures = [] c именами животных
//
import {Dog} from "./Dog.js";
import {Koala} from "./Koala.js";
import {Cat} from "./Cat.js";
import {Panda} from "./Panda.js";

class Zoo {
    _allCreatures = [];

    constructor() {
        // this._allCreatures.Add(new Dog('CHARLIE', 6.5, 15, 8.1, "Laos", 0.05),)
        this._allCreatures = [
            new Dog('CHARLIE', 6.5, 15, 8.1, "Laos", 0.05),
            new Koala('Luna', 6, 80, 3, "Sri Lanka", 3),
            new Cat('Loki', 2, 15, 5, "Italy", 0.05),
            new Dog('TEDDY', 6, 15, 8, "Sri Lanka", 0.9),
            new Panda('Duke', 50, 80, 4, "Sri Lanka", 2),
            new Cat('Willow', 2, 15, 5, "Italy", 0.05),
            new Koala('JASPER', 40, 80, 5, "Italy", 3),
            new Cat('Simba', 2, 15, 6, "Italy", 0.03),
            new Dog('Rambo', 7, 15, 12, "Sri Lanka", 1),
            new Koala('Halsey', 35, 80, 7, "Laos", 7),
            new Cat('Harris', 3, 15, 7, "Italy", 0.06),
            new Dog('Denzel', 10, 15, 15, "Sri Lanka", 1),
            new Panda('Duke', 50, 80, 4, "Sri Lanka", 2),
            new Dog('Vinny', 14, 15, 20, "Sri Lanka", 2),
            new Cat('Hannibal', 3, 15, 5, "Sri Lanka", 0.08),
            new Panda('Archie', 60, 80, 7, "Laos", 3),
            new Cat('Alvin', 8, 15, 20, "Sri Lanka", 0.09),
            new Cat('Greta', 9, 15, 12, "Laos", 0.09),
            new Panda('Duke', 50, 80, 4, "Sri Lanka", 2),
        ];
    }

    //get arr
    getCreaturesByType(type) {
        let arr = [];
        for (let i = 0; i < this._allCreatures.length; i++) {
            if (type === this._allCreatures[i].getCreatureType()) {
                arr.push(this._allCreatures[i])
            }
        }
        return arr;
    }


    getCreatureByName(name) {
        let arr = [];
        for (let i = 0; i < this._allCreatures.length; i++) {
            if (name === this._allCreatures[i].toString()) {
                arr.push(this._allCreatures[i])
            }
        }
        return arr;
    }

    //TODO: delete
    //Написать methods printCreatures(), которая принимает массив существ и выводит их имена через запятую, одной строкой
    printCreatures() {
        let str = '';
        for (let i = 0; i < this._allCreatures.length; i++) {
            let creature = this._allCreatures[i];
            let endings = i === this._allCreatures.length - 1 ? '.' : ', ';
            str += creature.toString() + endings;
        }
        return str;
    }

    //TODO: delete

    // 7. Написать methods, printCreaturesByType(creatures, type). Она как и предыдущая, принимает массив существ и  тип желамого существа.
    // Должена вывести строку, содержающую лишь имена тех существ, у которых creature.getCreatureType() === type
    printCreaturesByType(type) {
        let str = '';
        let found = false;
        for (let i = 0; i < this._allCreatures.length - 1; i++) {
            let creature = this._allCreatures[i]

            if (creature.getCreatureType() === type) {
                str += creature.toString() + ',';

                found = true;
            }
        }
        if (!found) {
            str = "no found";
        }
        return str.substring(0, str.length - 1) + '.';
    }

    //TODO: delete
    ////сделать methods printTotalCreaturesMass() выводящий total mass
    //
    printTotalCreaturesMass() {
        let mass = 0;
        for (let i = 0; i < this._allCreatures.length; i++) {
            let creature = this._allCreatures[i];
            let creatureMass = creature.getMass();
            mass += creatureMass;
        }
        return mass;
    }

    //TODO: delete
    ////сделать methods printTotalCreaturesMassByType(type). Вывод mass of creatures by type
    //
    printTotalCreaturesMassByType(type) {
        let massByType = 0;
        for (let i = 0; i < this._allCreatures.length; i++) {
            let creature = this._allCreatures[i];
            if (creature.getCreatureType() === type) {
                massByType += creature.getMass();
            }
        }
        return massByType;
    }

    //TODO: delete
    // сделать methods printCreaturesByCountry(cameFrom) - отобразить только имена  животных по странам
    //
    printCreaturesByCountry(cameFrom) {
        let byCountry = '';
        for (let i = 0; i < this._allCreatures.length; i++) {
            let creature = this._allCreatures[i];
            if (creature.getCameFrom() === cameFrom) {
                let creatureCountry = creature.toString() + ', ';
                byCountry += creatureCountry;
            }
        }
        return byCountry;
    }

    //TODO: delete
    // Сделать methods  printCreatureLifeLeft(name) - она должна вернуть число, отображающее сколько осталось жить существу, исходя из maxAge
    printCreatureLifeLeft(name) {
        let leftToLive = 0;
        for (let i = 0; i < this._allCreatures.length; i++) {
            let creature = this._allCreatures[i];
            let creatureName = creature.toString();
            if (creatureName === name) {
                leftToLive = creature.getMaxAge() - creature.getAge();
            }
        }

        return leftToLive;
    }

    getCreaturesCountByType(type) {
        let number = 0;
        for (let i = 0; i < this._allCreatures.length - 1; i++) {
            let creature = this._allCreatures[i]
            //console.log(`how many ${creature}`)
            if (creature.getCreatureType() === type) {
                number++;
            }
        }
        return number;
    }

}

export {Zoo};

