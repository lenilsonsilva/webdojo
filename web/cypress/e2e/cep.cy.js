import address from '../fixtures/cep.json'


describe('Validar CEP', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Integração', 'Consulta de CEP')
    })


    it('Deve validar o CEP', () => {
        cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, { 
            statusCode: 200,
  
        }) .as('getCep')
        
      
       cy.get('#cep').type(address.cep)
       cy.contains('button', 'Buscar').click()
       cy.wait('@getCep')
        cy.wait(5000)
       cy.get('#street').should('have.value', address.street)
       cy.get('#neighborhood').should('have.value', address.neighborhood)
       cy.get('#city').should('have.value', address.city)
       cy.get('#state').should('have.value', address.state)
      
    })


})