

describe('example to-do app', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rickandmortyapi.com/api/*', 
        { fixture: 'characters.json' } // and force the response to be: []
    ).as('getCharacters') // and assign an alias
})


it.only('displays two todo items by default', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(['@getCharacters'])
    cy.get('getUsers').should('have.length', 2)

  })

  it('can add new todo items', () => {

  })

  it('can check off an item as completed', () => {

  })


})