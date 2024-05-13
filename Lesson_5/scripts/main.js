// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const sum = (a, b) => a + b

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const square = r => 3.14 * r

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const squareCylinder = (h, r) => h * r

// - створити функцію яка приймає масив та виводить кожен його елемент
const squareArray = arr => {
    for (let el of arr) {
        console.log(el)
    }
}
squareArray([1, 2, 3])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const createParagraph = text => document.write(`<p>${text}</p>`)

createParagraph(`rewqw11111`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createList = text => document.write(`<ul>
                                                <li>${text}</li>
                                                <li>${text}</li>
                                                <li>${text}</li>
                                            </ul>`)

createList(`rewqw11111`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createListCycle = (text, number = 3) => {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createListCycle(`text`, 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const createListArr = (arr) => {
    document.write(`<ul>`)
    for (let el of arr) {
        document.write(`<li>${el}</li>`)
    }
    document.write(`</ul>`)
}

createListArr([1, `2`, false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const createListObject = (arr) => {
    document.write(`<div>`)
    for (let el of arr) {
        document.write(`<h2>${el.name}</h2>`)
        document.write(`<p>${el.id}</p>`)
        document.write(`<p>${el.age}</p>`)
    }
    document.write(`</div>`)
}

createListObject([
    {id: 1, name: `Oleh`, age: 24},
    {id: 2, name: `Vitaliy`, age: 26},
    {id: 3, name: `Vira`, age: 25}
])

// - створити функцію яка повертає найменьше число з масиву
const getMinNumber = arr => {
    let number
    for (let el of arr) {
        if (+el < number || !number) {
            number = el
        }
    }
    console.log(number)
}

getMinNumber([13, 55, 1, 4, 8, 0])

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sumArray = arr => {
    let result = 0
    for (let el of arr) {
        result += el
    }
    console.log(result)
}

sumArray([1, 2, 10])

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    const value = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = value
    //
    console.log(arr)
}

swap([11, 22, 33, 44], 0, 1)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let el of currencyValues) {
        if (el.currency === exchangeCurrency) {
            sumUAH /= el.value
        }
    }
    console.log(sumUAH)
}

exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')

// Additional task
//https://github.com/GrayHead/js_demos/blob/master/js/archive/additioanl_tasks/additional7/сlosures.pdf

const getDate = date => date.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    second: '2-digit'
})

const userCard = number => {
    return {
        balance: 0,
        transactionLimit: 100,
        historyLogs: [],
        key: number,
        putCredits(price) {
            this.balance += price

            this.historyLogs.push({
                operationType: `Received credits`,
                credits: this.balance,
                operationTime: getDate(new Date())
            })
            this.limit -= 1
        },
        takeCredits(price) {
            if ((this.balance - price) > 0) {
                this.balance -= price

                this.historyLogs.push({
                    operationType: `Withdrawal of credits`,
                    credits: this.balance,
                    operationTime: getDate(new Date())
                })
                this.limit -= 1
            } else {
                console.error(`Ви перевищили ліміт`)
            }
        },
        limit: 5000,
        setTransactionLimit(limit) {
            this.limit = limit

            this.historyLogs.push({
                operationType: `Transaction limit change`,
                credits: this.balance,
                operationTime: getDate(new Date())
            })
        },
        transferCredits(credit, key) {
            const tax = credit / 100 * 0.5

            if (this.balance >= credit + tax) {
                this.balance -= (credit + tax)
                key.balance += credit

                this.historyLogs.push({
                    operationType: `Withdrawal of credits`,
                    credits: this.balance,
                    operationTime: getDate(new Date())
                })
                key.historyLogs.push({
                    operationType: `Received credits`,
                    credits: key.balance,
                    operationTime: getDate(new Date())
                })
                this.limit -= 1
            } else {
                console.error(`Ви перевищили ліміт`)
            }
        },
        getCardOptions() {
            console.log(this)
        }
    }
}

/*const userCard1 = userCard(3)
userCard1.putCredits(150)
setTimeout(() => {
    userCard1.putCredits(150)
    setTimeout(() => {
        userCard1.takeCredits(150)
        userCard1.getCardOptions()
    }, 3000)
}, 3000)*/


class UserAccount {
    constructor(name) {
        this.name = name;
    }

    cards = []

    addCard() {
        if (this.cards.length <= 3) {
            return this.cards.push(userCard(this.cards.length + 1));
        }
        console.error(`Не можна створити більше, аніж 3 карти для користувача`)
    }

    getCardByKey(key) {
        for (let card of this.cards) {
            if (+card.key === +key) {
                return card
            }
        }
    }
}

let user = new UserAccount(`Bob`)
user.addCard()
user.addCard()

let card1 = user.getCardByKey(1)
let card2 = user.getCardByKey(2)

card1.putCredits(500)
card1.setTransactionLimit(800)
card1.transferCredits(300, card2)

card2.takeCredits(50)

card1.getCardOptions()
card2.getCardOptions()
