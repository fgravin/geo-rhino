/* eslint-disable cypress/no-unnecessary-waiting */
import type { AUTWindowOlMap } from '../types'

describe('Background selector', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the background selector properly', () => {
    cy.get('[data-cy="selectedBg"]').find('button').should('not.be.hidden')
    cy.get('[data-cy="available-bgs"]').find('button').should('be.hidden')
  })

  it('opens the selector and shows all available backgrounds', () => {
    cy.get('[data-cy="selectedBg"]').find('button').click()
    cy.get('[data-cy="selectedBg"]').find('button').should('be.hidden')
    cy.get('[data-cy="available-bgs"]').find('button').should('not.be.hidden')
  })

  it('updates the layer manager and the map when selecting a background layer', () => {
    cy.wait(1000) // Wait getCapabilities
    cy.window().then(window => {
      const layers = (<AUTWindowOlMap>window).olMap.getLayers().getArray()
      expect(layers[0].get('id')).to.eq(175)
    })

    cy.get('[data-cy="selectedBg"]').find('button').click()
    cy.get('[data-cy="available-bgs"]')
      .find('button')
      .filter('[title*="ASIT VD - Fond couleur"]')
      .click()
    cy.wait(1000) // Wait getCapabilities

    cy.window().then(window => {
      const layers = (<AUTWindowOlMap>window).olMap.getLayers().getArray()
      expect(layers[0].get('id')).to.eq(55619)
    })
  })
})
