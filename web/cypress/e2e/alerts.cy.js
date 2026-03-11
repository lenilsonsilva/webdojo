describe('Validar alertas em Java script', () => {

    beforeEach(() => {
        cy.login()
        // cy.goTo('Alertas JS ', 'JavaScript Alertas')
        cy.contains('button', 'Alertas JS').click()
        cy.contains('JavaScript Alerts').should('be.visible')
    })

    it('Deve validar mensagem de alerta', () => {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('Olá QA, eu sou um Alert Box!')
        })

        cy.contains('button', 'Mostrar Alert').click()

    })


    it('Deve confirmar um dialogo e validar a reposta positiva', () => {
        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.eq('Aperte um botão!')
            return true;
        })

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('Você clicou em Ok!')
        })

        cy.contains('button', 'Mostrar Confirm').click()

    })


    it('Deve confirmar um dialogo e validar a reposta negativa', () => {
        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.eq('Aperte um botão!')
            return false;
        })

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('Você cancelou!')
        })

        cy.contains('button', 'Mostrar Confirm').click()

    })

    it('Deve interagir, inserir o texto e validar', () => {
       cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Testador')
       })

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Olá Testador! Boas-vindas ao WebDojo!')
        })

        cy.contains('button', 'Mostrar Prompt').click()

    })

})
