// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

const greeting = 'hello';
const logo = 'owu';
const site = 'com';
const mark = 'ua';
const one = 1;
const ten = 10;
const minus = -999;
const sequence = 123;
const pi = 3.14;
const float = 2.7;
const sixth = 16;
const positive = true;
const negative = false;

console.info(`greeting =`, greeting);
console.info(`logo =`, logo);
console.info(`site =`, site);
console.info(`mark =`, mark);
console.info(`one =`, one);
console.info(`ten =`, ten);
console.info(`minus =`, minus);
console.info(`sequence =`, sequence);
console.info(`pi =`, pi);
console.info(`float =`, float);
console.info(`sixth =`, sixth);
console.info(`positive =`, positive);
console.info(`negative =`, negative);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

const firstName = `Yuriy`
const middleName = `Pavlovich`
const lastName = `Hutsaliuk`

console.info(`Full name —`, `${firstName} ${middleName} ${lastName}`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.info(`Type "a" —`, typeof a);
console.info(`Type "b" —`, typeof b);
console.info(`Type "c" —`, typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

const userFirstName = prompt(`What's your first name?`)
const userMiddleName = prompt(`What's your middle name?`)
const userYears = prompt(`How old are you?`)
console.info(`userFirstName —`, userFirstName);
console.info(`userMiddleName —`, userMiddleName);
console.info(`userYears —`, userYears);

