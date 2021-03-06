Cypress.Commands.add('login', ({ username, password }) => {
    cy.request('POST', 'http://localhost:3003/api/login', {
        username: username, password: password
    }).then(res => {
        localStorage.setItem('loggedBlogappUser', JSON.stringify(res.body))
        cy.visit('http://localhost:3000')
    })

})

Cypress.Commands.add('createBlog', ({ title, author, url, user }) => {
    cy.request({
        url: 'http://localhost:3003/api/blogs',
        method: 'POST',
        body: { title, author, url, user},
        headers: {
            'Authorization': `bearer ${JSON.parse(localStorage.getItem('loggedBlogappUser')).token}`
        }
    })

    cy.visit('http://localhost:3000')
})