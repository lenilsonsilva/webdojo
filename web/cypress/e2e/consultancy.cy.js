describe('Formulario de Consultoria', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')

    })

    it('Deve ser possível acessar a página de consultoria', () => {
        cy.get('#name').type('QA Tester')
        cy.get('#email').type('testee@teste.com')
        cy.get('#phone')
            .type('11999991000')
            .should('have.value', '(11) 99999-1000')

        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('Individual')

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .check()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('not.be.checked')

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('123.456.789-00')
            .should('have.value', '123.456.789-00')

        const discoveryChannels = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]

        discoveryChannels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/documento.pdf', { force: true })

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade" ]')
            .type('Estou interessado em uma consultoria para melhorar minhas habilidades de QA.')
            .should('have.value', 'Estou interessado em uma consultoria para melhorar minhas habilidades de QA.')

        const techs = [
            'Cypress',
            'JavaScript',
            'Selenium',
            'WebDriverIO',
            'Playwright'
        ]

        techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')

        })

        cy.contains('label', 'termos de uso')
            .find('input')
            .check()

        cy.contains('button', 'Enviar formulário')
            .click()

        cy.get('.modal', { timeout: 7000 })
            .should('be.visible')
            .find('.modal-content p')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')


        cy.contains('button', 'Fechar')
            .click()

    })

    it('Deve exibir mensagens de erro para campos obrigatórios', () => {
            cy.contains('button','Enviar formulário')
            .click()

            const requiredFields = [
               {label: 'Nome Completo', message: 'Campo obrigatório'},
               {label: 'Email', message: 'Campo obrigatório'},
               {label: 'termos de uso', message: 'Você precisa aceitar os termos de uso'},
            ]

        requiredFields.forEach(({ label, message }) => {
            cy.contains('label', label)
                .parent()
                .find('p')
                .should('be.visible')
                .should('have.text', message)
                .and('have.class', 'text-red-400')
                .and('have.css', 'color', 'rgb(248, 113, 113)')
        })

       
    })

})
