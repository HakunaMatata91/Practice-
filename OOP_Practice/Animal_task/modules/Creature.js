// 1. Сделать класс Creature. метод - getCreatureType()
//1.2 расширим наш Creature новыми данными (состояние).   Все эти поля должны быть протекед

export class Creature  {
    constructor(name, age, maxAge, mass, cameFrom, foodPerDay) {
        this._name = name;
        this._age = age;
        this._maxAge = maxAge;
        this._mass = mass;
        this._cameFrom = cameFrom;
        this._foodPerDay = foodPerDay;
    }

    setAge(age) {
        this._age = age;
    }

    getAge() {
        return this._age;
    }

    setMaxAge(maxAge) {
        this._maxAge = maxAge;
    }

    getMaxAge() {
        return this._maxAge;
    }

    setMass(mass) {
        this._mass = mass;
    }

    getMass() {
        return this._mass;
    }

    setCameFrom(cameFrom) {
        this._cameFrom = cameFrom;
    }

    getCameFrom() {
        return this._cameFrom;
    }

    setFoodPerDay(foodPerDay) {
        this._foodPerDay = foodPerDay;
    }

    getFoodPerDay() {
        return this._foodPerDay;
    }

    toString() {
        return this._name;
    }

    getCreatureType() {
        return 'CREATURE_BASE_TYPE';
    }
}

