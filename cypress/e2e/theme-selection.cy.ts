describe('Theme selector', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('When switching theme', () => {
    beforeEach(() => {
      cy.get('.rhino-theme-selector').click()
      cy.get('.rhino-theme-selector')
        .parent()
        .find('Button')
        .contains('Gestion des eaux')
        .click()
    })

    it('updates the colors of the whole app while switching theme', () => {
      cy.get('[data-cy="layerPanel"]')
        .get('[data-cy="parentLayerLabel-8"]')
        .should(
          'have.length',
          1
        )
    })
  })
})
