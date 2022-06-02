// 7. Написать функцию, printCreaturesByType(creatures, type). Она как и предыдущая, принимает массив существ и но и тип желамого существа
// Например вызов - printCreaturesByType(creature, "DOG") должен вывести строку, содержающую лишь имена тех существ,
//     у которых creature.getCreatureType() === type

class Creature {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }

    getCreatureType() {
        return 'CREATURE_BASE_TYPE';
    }
}

let creature = new Creature();
console.log(creature.getCreatureType());

class Dog extends Creature {
    constructor(name) {
        super(name);
    }

    getCreatureType() {
        return `DOG`;
    }
}

let dog = new Dog();
console.log(dog.getCreatureType());

class Cat extends Creature {
    constructor(name) {
        super(name);
    }

    getCreatureType() {
        return `CAT`;
    }
}

let cat = new Cat();
console.log(cat.getCreatureType());

class Elephant extends Creature {
    constructor(name) {
        super(name);
    }

    getCreatureType() {
        return `ELEPHANT`;
    }
}

let elephant = new Elephant();
console.log(elephant.getCreatureType());

let creatures = [
    new Dog('CHARLIE'),
    new Elephant('Luna'),
    new Cat('Loki'),
    new Dog('TEDDY'),
    new Cat('Willow'),
    new Elephant('JASPER'),
    new Cat('Simba'),
    new Dog('Rambo'),
    new Elephant('Halsey'),
    new Cat('Harris'),
    new Dog('Denzel'),
    new Elephant('Boomer'),
    new Dog('Vinny'),
    new Cat('Hannibal'),
    new Elephant('Archie'),
    new Cat('Alvin'),
    new Cat('Greta'),
    new Elephant('Duke'),
]

// console.log(creatures)

function printCreatures(creatures) {
    let str = '';
    for (let i = 0; i < creatures.length; i++) {
        let creature = creatures[i];
        let endings = i === creatures.length - 1 ? '.' : ', ';
        str +=  creature.toString() + endings;
    }
    return str;
}

let nameMyBase = printCreatures(creatures);
console.log(nameMyBase);

function printCreaturesByType(creatures, type) {
    let str = '';
    let found = false;
    for (let i = 0; i < creatures.length - 1; i++) {
        let creature = creatures[i]

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

console.log("START print filtered creatures by DOG");
let resultDog = printCreaturesByType(creatures, "DOG");
console.log(resultDog);

console.log("START print filtered creatures by CAT");
let resultCat = printCreaturesByType(creatures, "CAT");
console.log(resultCat);

console.log("START print filtered creatures by Elephant");
let resultElephant = printCreaturesByType(creatures, "CAT");
console.log(resultElephant);