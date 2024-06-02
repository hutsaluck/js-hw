const userId = new URL(location.href).searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {
        document.querySelector('.content-user').innerHTML = `<img src="./images/user.svg" alt="user">
                                    <div class="info-user">
                                        <h1>${user.name}</h1>
                                        <p class="username">@${user.username}</p>
                                        <p><a href="mailto:${user.email}">${user.email}</a></p>
                                        <p><a href="tel:${user.phone}">${user.phone}</a></p>
                                        <p><a href="${user.website}">${user.website}</a></p>
                                        <div class="wrap-additional-info">
                                            <div class="address">
                                                <h2>Address:</h2>
                                                <p class="street">${user.address.street}</p>                               
                                                <p class="suite">${user.address.suite}</p>                               
                                                <p class="city">${user.address.city}</p>                               
                                                <p class="zipcode">${user.address.zipcode}</p>                               
                                                <p class="geo">${user.address.geo.lat} ${user.address.geo.lng}</p>                               
                                            </div>
                                            <div class="company">
                                                <h2>Company:</h2>
                                                <p class="name">${user.company.name}</p>
                                                <p class="catchPhrase">${user.company.catchPhrase}</p>
                                                <p class="bs">${user.company.bs}</p>
                                            </div>
                                        </div>
                                        <button class="btn" data-id="${userId}">post of current user</button>
                                    </div>`
        document.querySelector(`.info-user button.btn`).addEventListener(`click`, showPosts, true)
    })


const showPosts = (e) => {
    e.preventDefault()

    const el = e.target
    const userId = el.dataset.id

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
        .then((posts) => {
            let postContent = ``
            for (const post of posts) {
                postContent += `<a href="./post-details.html?id=${post.id}" class="post">
                        <div class="content-post">
                            <h3 class="title">${post.title}</h3>
                            <p class="description">${post.body}</p>
                        </div>
                    </a>`
                document.querySelector(`.wrap-modal-post .modal-post .posts`).innerHTML = postContent
            }
        })

    document.querySelector(`.modal-post`).classList.add(`show`)
}

document.querySelector(`.modal-post .close`).addEventListener(`click`, e => {
    document.querySelector(`.modal-post`).classList.remove(`show`)
})

document.querySelector(`.wrap-modal-post`).addEventListener(`click`, e => {
    document.querySelector(`.modal-post`).classList.remove(`show`)
})
