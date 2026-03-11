import { getTodayDate } from '../support/utils'


describe('Login', () => {
   
//console.log(getTodayDate());

  it.only('Logar com Sucesso', () => {
   //cy.viewport('iphone-xr')
   cy.login(true)
   cy.get('[data-cy="user-name"]')
   .should('be.visible')
   .and('have.text', 'Fernando Papito')
   cy.getCookie('login_date').should('exist')

 cy.getCookie('login_date').should((cookie) => {
  expect(cookie.value).to.eq(getTodayDate())
})
    cy.window().then((win) => {
        const token = win.localStorage.getItem('token')
        expect(token).to.match(/^[a-fA-F0-9]{32}$/) 
    })

  })

  it('Não Logar com Senha Invalida', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'invalid-password')
    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
  })

  it('Não Logar com email Invalido', () => {
    cy.start()
    cy.submitLoginForm('invalid@webdojo.com', 'katana123')
    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
  })
})