// Класс Persone со свойствами (firstName,lastName, age) метод: getFullName - возвращает  firstName + lastName
class Persone {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }
}

let user = new Persone("Helen", "Hayden", 30);
console.log(user)
console.log(user.age)
console.log(user.getFullName());

// Класс Emploee extends Persone с собственными свойствами(idn, number)
class Emploee extends Persone {
    _idn;
    _number;

    constructor(firstName, lastName, age, idn, number) {
        super(firstName, lastName, age);
        this._idn = idn
        this._number = number
    }
}

const employer = new Emploee("Keely", "Gilliam", 40, 44, 22)
console.log(employer.getFullName())


//Задачи на наследование классов в JavaScript
class User {
    constructor(name, surname) {
        this._name = name
        this.surname = surname
    }

    getFullName() {
        return this._name + " " + this.surname;
    }
}

let userInfo = new User("Ioan", "Stephens", 1990)
console.log(userInfo.getFullName());


class Student extends User {
    year;

    constructor(name, surname, year) {
        super(name, surname);
        this.year = year
    }

    getFullName() {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let result = currentYear - this.year
        return `${super.getFullName()}  finished his studies ${result}  ago`;
    }
}

let student = new Student('Stevie', 'Cooper', 2015);
console.log(student.getFullName());


// Реализуйте класс Worker свойства: name, surname, rate, days Метод: getSalary(), который будет выводить зарплату работника.
//сделайте все свойства Worker приватными, а для их чтения сделайте методы-геттеры.
//для свойства rate и для свойства days сделайте еще и методы-сеттеры.

// 1) Private data via a naming convention
class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    getRate() {
        return `His Rate is ${this._rate}`;
    }

    getDays() {
        return `Work day per month ${this._days}`;
    }

    setRate(rate) {
        this._rate = rate;
        return this;
    }

    setDays(days) {
        this._days = days;
        return this;
    }

    getSalary() {
        let sumOfSalary = this._rate * this._days;
        return `His Salary is  ${sumOfSalary}$`;
    }
}

let worker = new Worker('Wil', 'Beil', 15, 10);
console.log(worker.getName())
console.log(worker.getSurname())
console.log(worker.getRate())
console.log(worker.getDays())
worker.setRate(52).setDays(31)
console.log(worker.getSalary())

//2)Private data via WeakMaps
let _name2 = new WeakMap();
let _surname2 = new WeakMap();
let _rate2 = new WeakMap();
let _days2 = new WeakMap();

class Workers2 {
    constructor(name2, surname2, rate2, days2) {
        _name2.set(this, name2);
        _surname2.set(this, surname2);
        _rate2.set(this, rate2);
        _days2.set(this, days2);
    }

    getFullName() {
        return _name2.get(this) + " " + _surname2.get(this);
    }

    setRate2(rate2) {
        _rate2.set(this, rate2);
    }

    setDays2(days2) {
        _days2.set(this, days2);
    }

    getRateSalary() {
        let sumOfPersonSalary = _rate2.get(this) * _days2.get(this);
        return `His Salary is  ${sumOfPersonSalary}$`;
    }
}

let workers2 = new Workers2('Dylan', 'Dunlap', 13, 10);
console.log(workers2.getFullName())
workers2.setRate2(444)
workers2.setDays2(31)
console.log(workers2.getRateSalary())

// Класс MyString с методами: reverse(строка), а возвращает ее в перевернутом виде,
// ucFirst(строка),  а возвращает эту же строку, сделав ее первую букву заглавной
// ucWords(строка) - делает заглавной первую букву каждого слова этой строки.
class MyString {
    reverse(str) {
        return str.split("").reverse().join('');
    }

    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')

    }
}

const str = new MyString();
console.log(str.reverse('absquatulate'))
console.log(str.ucFirst('absquatulate'))
console.log(str.ucWords('absquatulate - to leave somewhere abruptly'))

// Класс Validator, который будет проверять строки.
// метод isEmail(строку) - проверяет, является ли она корректным. Если является - возвращает true, если не является - то false.
// isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона
class Validator {
    isEmail(email) {
        let validRegex = /^[a-zA-Z\d.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*$/;
        return !!email.match(validRegex);
    }

    isDomain(domain) {
        let re = new RegExp(/^((?:(?:\w[.\-+]?)*\w)+)((?:(?:\w[.\-+]?){0,62}\w)+)\.(\w{2,6})$/);
        return domain.match(re);
    }

    isDate(date) {
        let date_regex = /^\d{1,2}\/*\.*\d{1,2}\/*\.*\d{4}$/;
        return date_regex.test(date)
    }

    isPhone(phone) {
        let phoneRegex = /^\+\d{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/;
        return !!phone.match(phoneRegex);
    }
}

const myValidator = new Validator();
console.log(myValidator.isEmail('bingo@patreon.com'))
console.log(myValidator.isDomain('phphtml.net'))
console.log(myValidator.isDate('12.05.2020'))
console.log(myValidator.isPhone('+380 (67)-995-33-65'))


//приватный вспомогательный метод
class Employee3 {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getSalary() {
        return Employee3.#addSign(this.salary);
    }

    static #addSign(num) {
        return num + '$';
    }
}

let newEmploee = new Employee3("John", 340);
console.log(newEmploee.getSalary())

//// Private data via #
class Agent {
    #name;
    #sur;
    #age;

    constructor(name, sur, age) {
        this.#name = name;
        this.#sur = sur;
        this.#age = age;
    }

    //Теперь наши сеттеры можно вызывать друг за другом, цепочкой.
    setName(name) {
        this.#name = name;
        return this;
    }

    setSur(sur) {
        this.#sur = sur;
        return this;
    }

    // проверку на то, что возраст должен быть от 0 до 120.
    setAge(age) {
        if (age > 0 && age < 120) {
            this.#age = age;
        } else {
            alert('surn is incorrect')
        }
    }

    getName() {
        return this.#name;
    }

    getSur() {
        return this.#sur;
    }

    getAge() {
        return this.#age;
    }
}

let agent = new Agent('Harry', 'Riley', 99);
agent.setName('Jack').setSur('Logan')
agent.setAge(110)
console.log(agent.getName())
console.log(agent.getSur())
console.log(agent.getAge())

///Переберать циклом массив объектов и выведстти в консоль  имена работников и зарплату.
class DiligentStudent {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Jobholder {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

let users = [
    new DiligentStudent('Dexter', 350),
    new Jobholder('Sullivan', 890),
    new DiligentStudent('Gus', 666),
    new Jobholder('Waldo', 273),
    new DiligentStudent('Leopold', 2230),
    new Jobholder('Zane', 3568),
    new DiligentStudent('Matteo', 872),
];

for (let i = 0; i < users.length - 1; i++) {
    let nameResult = `His name is ${users[i].name} and his salary are ${users[i].salary}$`;
    console.log(nameResult)
}

//Сделайте класс EmployeesCollection, который будет содержать массив работников.
class Vendor {
    getName(){
        return this.name;
    }
}
class Buyer extends Vendor {
    getSurname(){
        return this.surname;
    }

}
class Programmer extends Vendor{

}
class Designer extends Vendor{

}





