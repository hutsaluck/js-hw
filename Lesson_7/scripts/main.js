// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

const users = [];
for (let i = 1; i < 11; i++) {
    users.push(new User(i, `Name ${i}`, `Surname ${i}`, `email${i}@gmail.com`, `+38097123456${i}`))
}

console.log(`users`, users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const even_users = users.filter(user => !(user.id % 2))
console.log(`even_users`, even_users)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sort_users = users.sort((user1, user2) => user1.id - user2.id)
console.log(`sort_users`, sort_users)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

const clients = [];
const setProducts = count_products => {
    const new_products = []
    for (let i = 1; i < count_products; i++) {
        new_products.push(`product-${i}`)
    }
    return new_products
}
for (let i = 1; i < 11; i++) {
    const products = setProducts(Math.floor(Math.random() * (10 - 2) + 2))
    clients.push(new Client(i, `Name ${i}`, `Surname ${i}`, `email${i}@gmail.com`, `+38097123456${i}`, products));
}

console.log(`clients`, clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sort_clients = clients.sort((client1, client2) => client1.order.length - client2.order.length)
console.log(`sort_clients`, sort_clients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model
    this.manufacturer = manufacturer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engine = engine

    this.drive = () => {
        console.log(`We are driving at ${this.maxSpeed} per hour`)
    }

    this.info = () => {
        console.log(`Model of car`, this.model)
        console.log(`Manufacturer of car`, this.manufacturer)
        console.log(`Year of car`, this.year)
        console.log(`Max speed of car`, this.maxSpeed)
        console.log(`Engine of car`, this.engine)
    }

    this.increaseMaxSpeed = newSpeed => {
        this.maxSpeed = newSpeed;
        console.log(`Max speed increased to ${this.maxSpeed}`)
    }

    this.changeYear = newValue => {
        this.year = newValue;
        console.log(`Year of car changed to ${this.year}`)
    }

    this.addDriver = driver => {
        this.driver = driver;
        console.log(`Driver of car added ${JSON.stringify(this.driver)}`)
    }
}

const car = new Car(`R10`, `Audi`, 2010, 220, `V12`)
car.drive()
car.info()
car.increaseMaxSpeed(250)
car.changeYear(2021)
car.addDriver({name: `Name`, surname: `Surname`, email: `email@gmail.com`, phone: `+380971234561`})

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model
        this.manufacturer = manufacturer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engine = engine
    }


    drive() {
        console.log(`We are driving at ${this.maxSpeed} per hour`);
    }

    info() {
        console.log(`Model of car`, this.model)
        console.log(`Manufacturer of car`, this.manufacturer)
        console.log(`Year of car`, this.year)
        console.log(`Max speed of car`, this.maxSpeed)
        console.log(`Engine of car`, this.engine)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`Max speed increased to ${this.maxSpeed}`);
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(`Year of car changed to ${this.year}`);
    }

    addDriver(driver) {
        this.driver = driver;
        console.log(`Driver of car added ${JSON.stringify(this.driver)}`);
    }
}

const car_class = new CarClass(`R10`, `Audi`, 2010, 220, `V12`)
car_class.drive()
car_class.info()
car_class.increaseMaxSpeed(250)
car_class.changeYear(2021)
car_class.addDriver({name: `Name`, surname: `Surname`, email: `email@gmail.com`, phone: `+380971234561`})

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, size_foot) {
        this.name = name
        this.age = age
        this.size_foot = size_foot
    }
}

const cinderellas = []
for (let i = 1; i < 11; i++) {
    cinderellas.push(new Cinderella(`Cinderella ${i}`, Math.floor(Math.random() * (40 - 18) + 18), Math.floor(Math.random() * (42 - 30) + 30)));
}

console.log(`cinderellas`, cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, slipper_size) {
        this.name = name
        this.age = age
        this.slipper_size = slipper_size
    }
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))]
}

const prince = new Prince(`Prince`, 32, cinderellas.map(cinderella => cinderella.size_foot).random())
console.log(`prince`, prince)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let foundCinderella = [];

for (let cinderella of cinderellas) {
    if (cinderella.size_foot === prince.slipper_size) {
        foundCinderella.push(cinderella)
    }
}
console.log(`foundCinderella`, foundCinderella)

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const findCinderella = cinderellas.find(cinderella => cinderella.size_foot === prince.slipper_size)
console.log(`findCinderella`, findCinderella)

// Через Array.prototype. створити власний foreach, filter, map

Array.prototype.myForEach = function (callback) {
    for (const item of this) {
        callback(item)
    }
}

const forArray = [1, 2, 3, 4, 5]
forArray.myForEach(el => console.log(`el`, el))

// Adding myMap method to Array prototype
Array.prototype.myMap = function (callback) {
    let array = []
    for (const item of this) {
        array.push(callback(item))
    }
    return array
}

const mapArray = cinderellas.myMap(el => el.name)
console.log(`mapArray`, mapArray)

// Adding myFilter method
Array.prototype.myFilter = function (callback) {
    let filterArray = []
    for (const item of this) {
        if (callback(item)) {
            filterArray.push(item)
        }
    }
    return filterArray
}

const array = [1, 2, 3, 4, 5]
const filterArray = array.myFilter(el => !(el % 2))
console.log(`filterArray`, filterArray)