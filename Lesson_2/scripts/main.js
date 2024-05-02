// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(list[0])
console.log(list[1])
console.log(list[2])
console.log(list[3])
console.log(list[4])
console.log(list[5])
console.log(list[6])
console.log(list[7])
console.log(list[8])
console.log(list[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book_first = {
    title: `Harry Potter`,
    pageCount: 567,
    genre: 'fantasy'
}
const book_second = {
    title: `Tom Sawyer`,
    pageCount: 307,
    genre: 'comedy'
}
const book_third = {
    title: `The Devil wears Prada`,
    pageCount: 167,
    genre: 'chick lit'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const book_fantasy = {
    title: `Harry Potter`,
    pageCount: 567,
    genre: 'fantasy',
    authors: [
        {
            name: `J. K. Rowling.`,
            age: 59
        }
    ]
}
const book_comedy = {
    title: `Tom Sawyer`,
    pageCount: 307,
    genre: 'comedy',
    authors: [
        {
            name: `Mark Twain`,
            age: '-'
        }
    ]
}
const book_chick_lit = {
    title: `The Devil wears Prada`,
    pageCount: 167,
    genre: 'chick lit',
    authors: [
        {
            name: `Lauren Weisberger`,
            age: 47
        }
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const users = [
    {
        name: `Yuriy`,
        username: `hack`,
        password: `12345`
    },
    {
        name: `Vitaliy`,
        username: `vetal`,
        password: `pass`
    },
    {
        name: `Kolya`,
        username: `nick`,
        password: `nora`
    },
    {
        name: `Bogdan`,
        username: `bodya`,
        password: `bog123dan`
    },
    {
        name: `Olya`,
        username: `ola`,
        password: `oreo`
    },
    {
        name: `Ilona`,
        username: `lonka`,
        password: `limb`
    },
    {
        name: `Khrystyna`,
        username: `criss`,
        password: `strawberry`
    },
    {
        name: `Nadya`,
        username: `hope`,
        password: `stick`
    },
    {
        name: `Sonya`,
        username: `sophia`,
        password: `sonic`
    },
    {
        name: `Yulia`,
        username: `yulka`,
        password: `dora`
    },
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
const weather = [
    {
        name: `Monday`,
        time: {
            morning: `13°C`,
            day: `19°C`,
            evening: `5°C`,
        }
    },
    {
        name: `Tuesday`,
        time: {
            morning: `13°C`,
            day: `19°C`,
            evening: `5°C`,
        }
    },
    {
        name: `Wednesday`,
        time: {
            morning: `13°C`,
            day: `19°C`,
            evening: `5°C`,
        }
    },
    {
        name: `Thursday`,
        time: {
            morning: `13°C`,
            day: `19°C`,
            evening: `5°C`,
        }
    },
    {
        name: `Friday`,
        time: {
            morning: `13°C`,
            day: `19°C`,
            evening: `5°C`,
        }
    },
    {
        name: `Saturday`,
        time: {
            morning: `13°C`,
            day: `19°C`,
            evening: `5°C`,
        }
    },
    {
        name: `Sunday`,
        time: {
            morning: `13°C`,
            day: `19°C`,
            evening: `5°C`,
        }
    },
]


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

const x = 1;
// const x = 0;
// const x = -3;
if (!x) {
    console.log(`Вірно`);
} else {
    console.log(`Невірно`);
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
const time = 0;
if (time >= 15) {
    console.log(`Число припадає в першу четверть години`);
} else if (15 < time >= 30) {
    console.log(`Число припадає в другу четверть години`);
} else if (30 < time >= 45) {
    console.log(`Число припадає в третю четверть години`);
} else if (45 < time >= 59) {
    console.log(`Число припадає в четверту четверть години`);
} 

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
const day = 1;
if(day >= 10){
    console.log(`Число припадає в першу половину(декаду) місяця`);
} else if(10 < day >= 20){
    console.log(`Число припадає в другу половину(декаду) місяця`);
} else if(20 < day >= 31){
    console.log(`Число припадає в третю половину(декаду) місяця`);
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const select_day = +prompt(`Введіть день тижня номером:`)
const schedule = {
    name: `Sunday`,
    time: {
        morning: `13°C`,
        day: `19°C`,
        evening: `5°C`,
    }
}
switch (select_day){
    case 1:
        schedule.name = `Monday`
        schedule.time.morning = `Прокинутися та зробити зарядку`
        schedule.time.day = `Піти на роботу`
        schedule.time.evening = `Проходити курси та лягти спати`

        console.log(schedule)
        break
    case 2:
        schedule.name = `Tuesday`
        schedule.time.morning = `Прокинутися та зробити зарядку`
        schedule.time.day = `Піти на роботу`
        schedule.time.evening = `Проходити курси та лягти спати`

        console.log(schedule)
        break
    case 3:
        schedule.name = `Wednesday`
        schedule.time.morning = `Прокинутися та зробити зарядку`
        schedule.time.day = `Піти на роботу`
        schedule.time.evening = `Проходити курси та лягти спати`

        console.log(schedule)
        break
    case 4:
        schedule.name = `Thursday`
        schedule.time.morning = `Прокинутися та зробити зарядку`
        schedule.time.day = `Піти на роботу`
        schedule.time.evening = `Проходити курси та лягти спати`

        console.log(schedule)
        break
    case 5:
        schedule.name = `Friday`
        schedule.time.morning = `Прокинутися та зробити зарядку`
        schedule.time.day = `Піти на роботу`
        schedule.time.evening = `Проходити курси та лягти спати`

        console.log(schedule)
        break
    case 6:
        schedule.name = `Saturday`
        schedule.time.morning = `Прокинутися та зробити зарядку`
        schedule.time.day = `Піти на роботу`
        schedule.time.evening = `Проходити курси та лягти спати`

        console.log(schedule)
        break
    case 7:
        schedule.name = `Sunday`
        schedule.time.morning = `Прокинутися та зробити зарядку`
        schedule.time.day = `Дивитися фільми`
        schedule.time.evening = `Проходити курси та лягти спати`

        console.log(schedule)
        break
    default:
        schedule.name = `Sunday`
        schedule.time.morning = `Прокинутися та зробити зарядку`
        schedule.time.day = `Гуляти з друзями`
        schedule.time.evening = `Проходити курси та лягти спати`

        console.log(schedule)
        break
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
const first_number = +prompt(`Введіть перше число:`)
const second_number = +prompt(`Введіть друге число:`)
if(first_number > second_number){
    console.log(`${first_number} більше, аніж ${second_number}`);
} else if(first_number < second_number){
    console.log(`${second_number} більше, аніж ${first_number}`);
} else if(first_number === second_number){
    console.log(`Числа рівні`);
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let value = 0;
if(!value){
    value = `default`
}

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5){
    console.log(`${coursesAndDurationArray[0].title} — Супер`);
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log(`${coursesAndDurationArray[1].title} — Супер`);
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log(`${coursesAndDurationArray[2].title} — Супер`);
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log(`${coursesAndDurationArray[3].title} — Супер`);
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log(`${coursesAndDurationArray[4].title} — Супер`);
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log(`${coursesAndDurationArray[5].title} — Супер`);
}