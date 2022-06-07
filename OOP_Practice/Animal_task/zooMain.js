import {Cat} from "./modules/Cat.js";
import {Dog} from "./modules/Dog.js";
import {Elephant} from "./modules/Elephant.js";


//
//Сделать новый класс Zoo внутри которого мы будем хранить массив всех животных нашего зоопарка. Создать массив creatures = [] c именами животных
//
class Zoo {
    _allCreatures = [];

    constructor() {
        // this._allCreatures.Add(new Dog('CHARLIE', 6.5, 15, 8.1, "Laos", 0.05),)
        this._allCreatures = [
            new Dog('CHARLIE', 6.5, 15, 8.1, "Laos", 0.05),
            new Elephant('Luna', 6, 80, 3000, "Sri Lanka", 136),
            new Cat('Loki', 2, 15, 5, "Italy", 0.05),
            new Dog('TEDDY', 6, 15, 8, "Sri Lanka", 0.9),
            new Cat('Willow', 2, 15, 5, "Italy", 0.05),
            new Elephant('JASPER', 40, 80, 4000, "Italy", 200),
            new Cat('Simba', 2, 15, 6, "Italy", 0.03),
            new Dog('Rambo', 7, 15, 12, "Sri Lanka", 1),
            new Elephant('Halsey', 35, 80, 2500, "Laos", 250),
            new Cat('Harris', 3, 15, 7, "Italy", 0.06),
            new Dog('Denzel', 10, 15, 15, "Sri Lanka", 1),
            new Elephant('Boomer', 25, 80, 2000, "Laos", 150),
            new Dog('Vinny', 14, 15, 20, "Sri Lanka", 2),
            new Cat('Hannibal', 3, 15, 5, "Sri Lanka", 0.08),
            new Elephant('Archie', 60, 80, 5000, "Laos", 350),
            new Cat('Alvin', 8, 15, 20, "Sri Lanka", 0.09),
            new Cat('Greta', 9, 15, 12, "Laos", 0.09),
            new Elephant('Duke', 50, 80, 3400, "Sri Lanka", 400),
        ];
    }

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

    //
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

    //
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

    //
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
}
export {Zoo}

let zoo = new Zoo();
let nameMyBase = zoo.printCreatures();
console.log(`Name of creatures: ${nameMyBase}`);

let resultDog = zoo.printCreaturesByType("DOG");
console.log(`START print filtered creatures by DOG: ${resultDog}`);

let resultCat = zoo.printCreaturesByType("CAT");
console.log(`START print filtered creatures by CAT: ${resultCat}`);

let resultElephant = zoo.printCreaturesByType("CAT");
console.log(`START print filtered creatures by Elephant: ${resultElephant}`);

let result = zoo.printTotalCreaturesMass();
console.log(`Total mass for all creatures:  ${result} kg`)

let elephantResult = zoo.printTotalCreaturesMassByType('ELEPHANT');
console.log(`Total mass for creatures by type "ELEPHANT":  ${elephantResult} kg `);

let dogResult = zoo.printTotalCreaturesMassByType('DOG');
console.log(`Total mass for creatures by type "DOG":  ${dogResult} kg`);

let catResult = zoo.printTotalCreaturesMassByType('CAT');
console.log(`Total mass for creatures by type "CAT":  ${catResult} kg`);

let nameByLaos = zoo.printCreaturesByCountry('Laos');
console.log(`Name of animals by Laos:  ${nameByLaos} `);

let nameByItaly = zoo.printCreaturesByCountry('Italy');
console.log(`Name of animals by Italy:  ${nameByItaly} `);

let nameBySriLanka = zoo.printCreaturesByCountry('Sri Lanka');
console.log(`Name of animals by Sri Lanka:  ${nameBySriLanka} `);

let nameBy = zoo.printCreatureLifeLeft("Archie");
console.log(`How long does a creatures have to live: ${nameBy} years`)


