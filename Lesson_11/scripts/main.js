// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(({carts}) => {
        let cartContent = ``
        for (const cart of carts) {
            fetch(`https://dummyjson.com/user/${cart.userId}`)
                .then(value => value.json())
                .then((user) => {
                    cartContent += `<div class="cart" data-id="${cart.id}">
                            <img src="./images/cart.svg" alt="cart-image">
                            <h2>Cart ${cart.id}</h2>
                            <div class="cart-info">
                                <p class="total">$${cart.total.toFixed(2)}</p>
                                <p class="discountedTotal">$${cart.discountedTotal}</p>
                                <p class="userId">${user.firstName} ${user.lastName}</p>
                                <p class="totalProducts">${cart.totalProducts.toFixed(2)} (<span class="totalQuantity">${cart.totalQuantity}</span>)</p>
                            </div>
                        </div>`
                    document.querySelector(`.wrap-carts`).innerHTML = cartContent
                    Array.from(document.getElementsByClassName(`cart`)).forEach(el => {
                        el.addEventListener(`click`, showCart, true)
                    })
                })
        }
    })

const showCart = (e) => {
    e.preventDefault()

    let el = e.target

    if (!el.classList.contains('cart')) {
        el = el.closest('div.cart')
    }
    const cartId = el.dataset.id


    fetch(`https://dummyjson.com/carts/${cartId}`)
        .then(value => value.json())
        .then((cart) => {
            let cartContent = ``
            for (const product of cart.products) {
                cartContent += `<div class="product">
                        <img src="${product.thumbnail}"
                             alt="product">
                        <img src="./images/discount-percent.svg" alt="discount" class="discount">
                        <div class="content-product">
                            <h3 class="title">${product.title}</h3>
                            <p class="product-total">
                                <span class="price">$${product.price.toFixed(2)}</span> × <span class="quantity">${product.quantity}</span> = <span class="discountedTotal">$${product.discountedTotal.toFixed(2)}</span>
                            </p>
                            <p class="total">$${product.total.toFixed(2)}</p>
                            <p class="discountPercentage">${product.discountPercentage.toFixed(2)}</p>
                        </div>
                    </div>`
                document.querySelector(`.wrap-modal-cart .modal-cart .products`).innerHTML = cartContent
            }
        })

    document.querySelector(`.modal-cart`).classList.add(`show`)
}

document.querySelector(`.modal-cart .close`).addEventListener(`click`, e => {
    document.querySelector(`.modal-cart`).classList.remove(`show`)
})

document.querySelector(`.wrap-modal-cart`).addEventListener(`click`, e => {
    document.querySelector(`.modal-cart`).classList.remove(`show`)
})


//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

const recipesContainer = document.getElementById('recipes-container');

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(({recipes}) => {
        let recipesContent = ``

        recipes.forEach(recipe => {
            recipesContent += `<div class="recipe">
                                <img src="${recipe.image}" alt="recipe">
                                <div class="recipe-content">
                                <h3>${recipe.name}</h3>
                                <p>${recipe.instructions}</p>
                                <ul>`
            recipe.ingredients.forEach(ingredient => {
                recipesContent += `<li class="ingredient">${ingredient}</li>`
            })
            recipesContent += `</ul>
                                </div>
                                </div>`
        })

        document.querySelector(`.wrap-recipes`).innerHTML = recipesContent
    })
    .catch(error => console.error(`Error recipes:`, error))

//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let usersContent = ``

        users.forEach(user => {
            usersContent += `<a href="./user-details.html?id=${user.id}" class="user">
                                <img src="./images/user.svg" alt="user">
                                <h3>${user.id}. ${user.name}</h3>
                            </a>`
        })

        document.querySelector(`.wrap-users`).innerHTML = usersContent
    })

