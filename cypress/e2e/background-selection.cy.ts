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
})
