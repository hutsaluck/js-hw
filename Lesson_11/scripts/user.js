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
                                    </div>`
    })

