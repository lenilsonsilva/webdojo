describe('Hover Test', () => {
  it('LoLocalizador Intagran', () => {
    cy.login()

    cy.get('[data-cy="instagram-link"]').realHover()
    cy.contains('Isso é Mouseover!').should('exist')

  });
});