describe('smoke test', () => {
  it('Agregar una opción a la web', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("Hawaii")
    cy.get('[data-testid="text-input"]').type('{enter}')
  })

  it('Agregar varias opciones', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("Hawaii")
    cy.get('[data-testid="text-input"]').type('{enter}')
    cy.get('[data-testid="text-input"]').type("Australia")
    cy.get('[data-testid="text-input"]').type('{enter}')
    cy.get('[data-testid="text-input"]').type("Canadá")
    cy.get('[data-testid="text-input"]').type('{enter}')
  })

  it("Eliminar varias opciones ya existentes", () => {
    cy.visit("https://todomvc.com/examples/react/dist/")
    cy.get('[data-testid="text-input"]').type('Alemania{enter}')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("Hawai{enter}")
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
  })
  
})