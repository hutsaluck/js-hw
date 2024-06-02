const postId = new URL(location.href).searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(value => value.json())
    .then(comments => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(value => value.json())
            .then((post) => {
                document.querySelector(`.post-content`).innerHTML =  `<h1 class="title">${post.title}</h1>
                            <p class="description">${post.body}</p>
                            <div class="comment-content"></div>`
                let commentsContent = ``
                for (const comment of comments) {
                    commentsContent += `<div class="comment">
                            <img src="./images/user.svg" alt="user">
                            <div class="comment-info">
                                <a href="mailto:${comment.email}">${comment.email}</a>
                                <h3 class="title">${comment.name}</h3>
                                <p class="description">${comment.body}</p>
                            </div>
                            
                    </div>`
                    document.querySelector(`.comment-content`).innerHTML = commentsContent
                }
            })
    })