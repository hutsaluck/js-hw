// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const wordList = [`hello world`, `lorem ipsum`, `javascript is cool`]
wordList.forEach(el => console.log(el.length))

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

wordList.forEach(el => console.log(el.toUpperCase()))

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const wordListUpper = [`HELLO WORLD`, `LOREM IPSUM`, `JAVASCRIPT IS COOL`]
wordListUpper.forEach(el => console.log(el.toLowerCase()))

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
str = str.trim()
console.log(str);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToArray = str => str.split(` `)
const string = 'Ревуть воли як ясла повні'
const arr = stringToArray(string)
console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
const strings = numbers.map(el => el.toString())
console.log(strings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNums = (arr, order = `ascending`) => {
    if (order === `ascending`) return arr.sort()
    return arr.sort((a, b) => a - b)
}

const nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
console.log(coursesAndDurationArray);

const coursesAndDurationArrayFilter = coursesAndDurationArray.filter(el => el.monthDuration > 5)
console.log(coursesAndDurationArrayFilter);

const coursesAndDurationArrayType = coursesAndDurationArray.map((el, key) => ({id: ++key, ...el}))
console.log(coursesAndDurationArrayType);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const range = (start, stop, step = 1) =>
    Array.from({length: (stop - start) / step + 1}, (_, i) => start + i * step)

const deckCards = {
    cardSuit: ['spade', 'diamond', 'heart', 'clubs'],
    value: [...range(6, 10), 'ace', 'jack', 'queen', 'king', 'joker'],
    color: ['red', 'black'],
}

console.log(deckCards);


/* Another version */
const deckCardsMap = {
    cardSuit: ['spade', 'diamond', 'heart', 'clubs'],
    value: [...range(6, 10), 'ace', 'jack', 'queen', 'king', 'joker'],
    color: ['red', 'black'],
}

const deck = []
deckCardsMap.cardSuit.map((suit, key) => deckCardsMap.value.map(el => deck.push(({cardSuit: suit, value: el, color: suit === `diamond` || suit === `clubs` ? deckCardsMap.color[1] : deckCardsMap.color[0]}))))
console.log(deck)

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


const deckCardSort = Object.values(deckCards).reduce((accumulator, value, key) => {
    if (key === 1) {
        for (let accumulator_key in accumulator) {
            accumulator[accumulator_key] = value
        }
    }

    return accumulator
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})

console.log(deckCardSort);

/* Another version */
const deckSort = Object.values(deck).reduce((accumulator, card, key) => {
    switch (card.cardSuit) {
        case `spade`:
            accumulator.spades.push(card)
            break
        case `diamond`:
            accumulator.diamonds.push(card)
            break
        case `heart`:
            accumulator.hearts.push(card)
            break
        case `clubs`:
            accumulator.clubs.push(card)
            break
    }

    return accumulator
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})

console.log(deckSort);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const coursesArraySass = coursesArray.filter(el => el.modules.includes(`sass`))
console.log(coursesArraySass);

const coursesArrayDocker = coursesArray.filter(el => el.modules.includes(`docker`))
console.log(coursesArrayDocker);