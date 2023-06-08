describe('Language selector', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the language selector properly (2 languages)', () => {
    cy.get('[data-cy="langSelect"] .rhino-dropdown-btn').should('not.be.hidden')
    cy.get('[data-cy="langSelect"] .rhino-dropdown-list').should('be.hidden')
    cy.get('[data-cy="langSelect"] .rhino-dropdown-list li').should(
      'have.length',
      2
    )
  })

  it('toggles dropdown when click on icon', () => {
    cy.get('[data-cy="langSelect"] .rhino-dropdown-btn').click()
    cy.get('[data-cy="langSelect"] .rhino-dropdown-list').should('not.be.hidden')
  })

  it('has the right aria label', () => {
    cy.get('[data-cy="langSelect"] .rhino-dropdown-btn').click()
    cy.get('[data-cy="langSelect"] .rhino-dropdown-list')
      .find('button')
      .eq(0)
      .invoke('attr', 'aria-label')
       // Translation not available yet, testing on key value
      .should('eq', 'Changer de langue : {{lang}}')
  })

  it('changes the language from FR to EN when selecting a lang', () => {
    cy.get('[data-cy="layerPanel"] > h2').eq(0).contains('Catalogue')
    cy.get('[data-cy="layerPanel"] > h2').eq(1).contains('Couches sélectionnées')

    cy.get('[data-cy="langSelect"] .rhino-dropdown-btn').click()
    cy.get('[data-cy="langSelect"] [data-value="en"]').click()
    
    cy.get('[data-cy="layerPanel"] > h2').eq(0).contains('Catalog')
    cy.get('[data-cy="layerPanel"] > h2').eq(1).contains('Layers')

    cy.get('[data-cy="langSelect"] .rhino-dropdown-btn').should('not.be.hidden')
    cy.get('[data-cy="langSelect"] .rhino-dropdown-list').should('be.hidden')
  })
})
