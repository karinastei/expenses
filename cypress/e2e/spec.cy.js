describe('Expense list', () => {
  it('should display the expense list', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.expense-item').should('have.length', 3)
    cy.contains('Playstation 5').should('be.visible')
    cy.contains('599.99').should('be.visible')
    cy.contains('2023').should('be.visible')
  })
})

describe('Expense list', () => {
  it('Add new Expense and cancel buttons should work', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Add new Expense').click()
    cy.contains('Cancel').click()
    cy.contains('Add new Expense').click()
  })
})

describe('Expense list', () => {
  it('should have a fillable form, new expense should be in list', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Add new Expense').click()

    cy.contains('Title').next('input').type('sneakers')
    cy.contains('price').next('input').type('500')
    cy.contains('Date').next('input').type('2023-12-12')

    cy.contains('Add Expense').click()
    cy.get('.expense-item').should('have.length', 4)
    cy.contains('sneakers')
    cy.contains('500')
    cy.contains('December')
    cy.contains('12')
    cy.contains('2023')
  })
})

describe('Expense list', () => {
  it('the filter should filter by year', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Filter by year').siblings('select').select('2024')

    cy.get('.expense-item').should('have.length', 2)
    cy.contains('Old book').should('be.visible')
    cy.contains('35.99').should('be.visible')
    cy.contains('2024').should('be.visible')
    cy.contains('March').should('be.visible')
    cy.contains('02').should('be.visible')

    cy.get('.expense-item').should('have.length', 2)
    cy.contains('New jeans').should('be.visible')
    cy.contains('68.86').should('be.visible')
    cy.contains('2024').should('be.visible')
    cy.contains('March').should('be.visible')
    cy.contains('04').should('be.visible')

    cy.contains('Filter by year').siblings('select').select('2025')
    cy.contains('No expenses found').should('be.visible')
  })
})