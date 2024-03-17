describe('User login', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
    cy.get('#loginform').click()
    cy.get('#username').type('astro1')
    cy.get('#password').type('encriptado1')
    cy.get('#loginSession').click()
  })
    it('Create notes', function() {
      cy.get('#newnote').click() 
      cy.get('#content').type('laberinto de letras en el manuscrito perdido de oriente')
      cy.get('#title').type('laberinto')
      cy.get('#gender').type('ciencia ficcion')
      cy.get('#create').click()
    })

})


/**cy.get('#content').type('los misterios del universo')
      cy.get('#title').type('univereso')
      cy.get('#gender').type('terror')
      cy.get('#create').click()*/
