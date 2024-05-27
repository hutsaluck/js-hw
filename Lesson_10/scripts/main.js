// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================

document.forms.user_data.onsubmit = e => {
    e.preventDefault()

    const el = e.target

    const user = {
        name: el.name.value,
        surname: el.surname.value,
        age: el.age.value,
    }

    document.getElementById(`user_name`).textContent = user.name
    document.getElementById(`user_surname`).textContent = user.surname
    document.getElementById(`user_age`).textContent = user.age
    document.querySelector(`.output`).classList.add(`show`)
}

document.querySelector(`.output .close`).addEventListener(`click`, e => {
    document.querySelector(`.output`).classList.remove(`show`)
})


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
let reloadCount = localStorage.getItem('reload_count')
document.getElementById('reload_count').textContent = ++reloadCount
localStorage.setItem('reload_count', reloadCount)


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================

let visitData = sessionStorage.getItem('visit_data')

if (visitData) {
    visitData = JSON.parse(visitData)
    visitData.push(
        new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            hour12: false,
            minute: '2-digit',
            second: '2-digit'
        })
    )
} else {
    visitData = [
        new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            hour12: false,
            minute: '2-digit',
            second: '2-digit'
        })
    ]
}

sessionStorage.setItem('visit_data', JSON.stringify(visitData))


//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

class User {
    constructor(id, name, surname, age) {
        this.id = id
        this.name = name
        this.surname = surname
        this.age = age
    }
}

const users = []
for (let i = 1; i <= 100; i++) {
    users.push(new User(i, `Name ${i}`, `Surname ${i}`, Math.floor(Math.random() * (60 - 18) + 18)))
}

let firstUser = 0
const countUsersPerPage = 10

const showUsers = firstUser => {
    const wrapUsers = document.getElementById(`wrap-users`)
    const lastUser = Math.min(firstUser + countUsersPerPage, users.length)

    wrapUsers.innerHTML = ``

    for (let i = firstUser; i < lastUser; i++) {
        wrapUsers.innerHTML += `<div class="user">
            <img src="./images/user.png" alt="user">
            <h2>${users[i].name} ${users[i].surname}</h2>
            <p>${users[i].age} years old</p>
        </div>`
    }
}

document.getElementById(`prev`).addEventListener(`click`, () => {
    if (firstUser) {
        firstUser -= countUsersPerPage
        showUsers(firstUser)
    }
})

document.getElementById(`next`).addEventListener(`click`, () => {
    if (firstUser + countUsersPerPage < users.length) {
        firstUser += countUsersPerPage
        showUsers(firstUser)
    }
})

showUsers(firstUser)


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

document.getElementById(`removeBtn`).addEventListener(`click`, () => {
    document.getElementById(`text`).style.display = `none`
});

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById(`checkBtn`).addEventListener(`click`, e => {
    e.preventDefault()

    let textModal = `You are under 18`
    document.querySelector(`.modal-age img.check-image`).src = `./images/warning.png`
    document.querySelector(`.modal-age img.check-image`).style.maxWidth = `80%`
    if (parseInt(document.getElementById(`customer_age`).value) >= 18) {
        textModal = `You are over 18`
        document.querySelector(`.modal-age img.check-image`).src = `./images/check-mark.png`
        document.querySelector(`.modal-age img.check-image`).style.maxWidth = `45%`

    }

    document.querySelector(`.modal-age h3`).textContent = textModal
    document.querySelector(`.modal-age`).classList.add(`show`)

})

document.querySelector(`.modal-age .close`).addEventListener(`click`, e => {
    document.querySelector(`.modal-age`).classList.remove(`show`)
}, true)

document.querySelector(`.wrap-modal-age`).addEventListener(`click`, e => {
    document.querySelector(`.modal-age`).classList.remove(`show`)
}, true)


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

document.forms.table_data.onsubmit = e => {
    e.preventDefault()

    const el = e.target

    const table = {
        count_rows: el.count_rows.value,
        count_columns: el.count_columns.value,
        value_cell: el.value_cell.value,
    }
    let tableContent = `<table>`

    for (let i = 1; i <= table.count_rows; i++) {
        tableContent += `<tr>`
        for (let j = 0; j < table.count_columns; j++) {
            tableContent += `<td>${table.value_cell}</td>`
        }
        tableContent += `</tr>`
    }
    tableContent += `</table>`


    document.querySelector(`.output-table`).innerHTML = tableContent
}


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let reloadMoney = localStorage.getItem('reload_money')
let visitMoney = localStorage.getItem('visit_money')

if (reloadMoney) {
    document.querySelector('#reload_money span').textContent = reloadMoney
}

const differenceDateTime = (date1, date2) => parseInt(( new Date(date2).getTime() - new Date(date1).getTime()) / 1000)

if (visitMoney) {
    const currentTime = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        hour12: false,
        minute: '2-digit',
        second: '2-digit'
    })

    if (differenceDateTime(visitMoney, currentTime) > 10) {
        reloadMoney = parseInt(reloadMoney) + 10
        document.querySelector('#reload_money span').textContent = reloadMoney
        localStorage.setItem('reload_money', reloadMoney)
        localStorage.setItem('visit_money', currentTime)
    }
} else {
    reloadMoney = parseInt(document.querySelector('#reload_money span').textContent) + 10
    document.querySelector('#reload_money span').textContent = reloadMoney
    localStorage.setItem('reload_money', reloadMoney)

    visitMoney = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        hour12: false,
        minute: '2-digit',
        second: '2-digit'
    })
    localStorage.setItem('visit_money', visitMoney)
}

