describe('Links abrinco uma nova guia/janela', () => {
    it('Validando o atributo do link do Instagram', () => {
        cy.login()
        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')
    })

    it('Acessa link de termos de uso removendo o target blank', () => {
        cy.login()
        cy.contains('Formulários').click()
        cy.contains('a', 'termos de uso')
          .invoke('removeAttr', 'target')
          .click()
        cy.contains('Aceitação dos Termos')
          .should('be.visible')


    })

})