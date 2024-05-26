// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const block = document.createElement(`div`)
block.classList.add(`wrap`, `collapse`, `alpha`, `beta`)
block.id = `block`

block.style.backgroundColor = `blue`
block.style.color = `white`
block.style.padding = `10px`
block.style.margin = `10px`
block.style.fontFamily = `"Gill Sans", sans-serif`
block.style.fontSize = `40px`
block.style.textAlign = `center`

block.innerText = `Test text`
document.body.append(block, block.cloneNode(true))


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const pageElements = [`Main`, `Products`, `About us`, `Contacts`]
const ul = document.createElement(`ul`)
for (const pageElement of pageElements) {
    const li = document.createElement(`li`)
    li.textContent = pageElement
    ul.appendChild(li)
}
document.body.appendChild(ul)

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

const coursesAndDurationArray = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}
]

for (const course of coursesAndDurationArray) {
    const block = document.createElement(`div`)
    block.textContent = `Title: ${course.title}, Month duration: ${course.monthDuration} months`
    document.body.appendChild(block);
}

// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    const block = document.createElement(`div`)
    block.classList.add(`item`)
    
    const header = document.createElement(`h1`)
    header.classList.add(`heading`)
    header.textContent = course.title
    block.appendChild(header)
    
    const paragraph = document.createElement(`p`)
    paragraph.classList.add(`description`)
    paragraph.textContent = course.monthDuration
    block.appendChild(paragraph)
    
    document.body.appendChild(block);
}



// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


const simpsons = [
    {
        name: `Bart`,
        surname: `Simpson`,
        age: 10,
        info: `Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.`,
        photo: `https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png`
    },
    {
        name: `Homer`,
        surname: `Simpson`,
        age: 40,
        info: `Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.`,
        photo: `https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png`
    },
    {
        name: `Marge`,
        surname: `Simpson`,
        age: 38,
        info: `Марджорі Жаклін "Мардж" Сімпсон (у дівоцтві Був'є) (англ. Marjorie Jacqueline "Marge" Simpson) - постійний персонаж мультиплікаційного серіалу "Сімпсони", її озвучує Джулія Кавнер. Зазвичай носить зелену сукню, червоні балетки, на шиї - намисто зі штучних перлів і їздить на помаранчевому універсалі. У неї шикарне синє волосся, яке вона зазвичай збирає в дуже високу зачіску. Очі кольору горіха (19s6e). Основне заняття - домогосподарка, більшу частину часу проводить у турботі про дім, дітей і Гомера. Образ Мардж копіює стереотип провінційної американської домогосподарки 50-х років. Мардж - єдиний член сім'ї, який відвідує церкву добровільно. Намагається підтримувати моральність не тільки своєї сім'ї, а й усього міста. Відмінно готує, особливо славляться її свинячі відбивні та зефір. Улюблена страва - локшина з маслом.`,
        photo: `https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png`
    },
    {
        name: `Lisa`,
        surname: `Simpson`,
        age: 9,
        info: `Ліза Марі Сімпсон (англ. Lisa Marie Simpson) - героїня мультиплікаційного серіалу "Сімпсони". Середня дитина в сім'ї, восьмирічна дівчинка, що вирізняється з-поміж решти Сімпсонів насамперед своїм розумом і розсудливістю.`,
        photo: `https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png`
    },
    {
        name: `Maggie`,
        surname: `Simpson`,
        age: 1,
        info: `Маргарет Евелін "Меггі" Сімпсон (англ. Margaret Evelyn "Maggie" Simpson) - персонаж мультсеріалу "Сімпсони". Уперше з'явилася на телебаченні в шоу Трейсі Ульман, у короткометражці Good Night (англ.) рос. 19 квітня 1987 року. Меггі придумав і розробив карикатурист Метт Грейнінг, поки він чекав зустрічі з Джеймсом Л. Бруксом. Названа на честь молодшої сестри Грейнінга. Після появи в шоу Трейсі Ульман, через три роки сім'я Сімпсонів отримала власний серіал на телеканалі Fox, дебют відбувся 17 грудня 1989 року.`,
        photo: `https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png`
    },
]

for (const simpson of simpsons) {
    const block = document.createElement(`div`)
    block.className = `member`

    const h1 = document.createElement(`h1`)
    h1.textContent = `${simpson.name} ${simpson.surname}`

    const age = document.createElement(`p`)
    age.textContent = `Age: ${simpson.age}`

    const info = document.createElement(`p`)
    info.textContent = simpson.info

    const img = document.createElement(`img`)
    img.src = simpson.photo
    img.alt = `${simpson.name} ${simpson.surname}`

    block.appendChild(h1)
    block.appendChild(age)
    block.appendChild(info)
    block.appendChild(img)

    document.body.appendChild(block)
}

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------

let coursesArray = [
    {
        title: `JavaScript Complex`,
        monthDuration: 5,
        hourDuration: 909,
        modules: [`html`, `css`, `js`, `mysql`, `mongodb`, `react`, `angular`, `aws`, `docker`, `git`, `node.js`]
    },
    {
        title: `Java Complex`,
        monthDuration: 6,
        hourDuration: 909,
        modules: [`html`,
            `css`,
            `js`,
            `mysql`,
            `mongodb`,
            `angular`,
            `aws`,
            `docker`,
            `git`,
            `java core`,
            `java advanced`]
    },
    {
        title: `Python Complex`,
        monthDuration: 6,
        hourDuration: 909,
        modules: [`html`,
            `css`,
            `js`,
            `mysql`,
            `mongodb`,
            `angular`,
            `aws`,
            `docker`,
            `python core`,
            `python advanced`]
    },
    {
        title: `QA Complex`,
        monthDuration: 4,
        hourDuration: 909,
        modules: [`html`, `css`, `js`, `mysql`, `mongodb`, `git`, `QA/QC`]
    },
    {
        title: `FullStack`,
        monthDuration: 7,
        hourDuration: 909,
        modules: [`html`,
            `css`,
            `js`,
            `mysql`,
            `mongodb`,
            `react`,
            `angular`,
            `aws`,
            `docker`,
            `git`,
            `node.js`,
            `python`,
            `java`]
    },
    {
        title: `Frontend`,
        monthDuration: 4,
        hourDuration: 909,
        modules: [`html`, `css`, `js`, `mysql`, `mongodb`, `react`, `angular`, `aws`, `docker`, `git`, `sass`]
    }
]

for (const course of coursesArray) {
    const courseBlock = document.createElement(`div`)
    courseBlock.className = `course`

    const titleBlock = document.createElement(`h2`)
    titleBlock.className = `title`
    titleBlock.style.textAlign = `center`
    titleBlock.style.textTransform = `uppercase`
    titleBlock.textContent = course.title
    courseBlock.appendChild(titleBlock)

    const monthDurationBlock = document.createElement(`aside`)
    monthDurationBlock.className = `monthDuration`
    monthDurationBlock.style.width = `30%`
    monthDurationBlock.style.display = `inline-block`
    monthDurationBlock.textContent = `Duration: ${course.monthDuration} months`
    courseBlock.appendChild(monthDurationBlock)

    const hourDurationBlock = document.createElement(`aside`)
    hourDurationBlock.className = `hourDuration`
    hourDurationBlock.style.width = `70%`
    hourDurationBlock.style.display = `inline-block`
    hourDurationBlock.textContent = `Hour Duration: ${course.hourDuration}`
    courseBlock.appendChild(hourDurationBlock)

    const modulesBlock = document.createElement(`div`)
    modulesBlock.className = `modules`
    const modulesList = document.createElement(`ul`)

    for (const module of course.modules) {
        const moduleItem = document.createElement(`li`)
        moduleItem.textContent = module
        modulesList.appendChild(moduleItem)
    }

    modulesBlock.appendChild(modulesList)
    courseBlock.appendChild(modulesBlock)
    document.body.appendChild(courseBlock)
}



