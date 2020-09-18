describe('test all inputs',() => {
    it('Navigates to site',() =>{
        cy.visit('http://localhost:3002/pizza')
    }) 
    it('checks if name takes text',() => {
        cy.get('input[name = "name"]').type('Miah')
        .should('have.value', 'Miah')
    })
    it('checks checkbox can be checked', () =>{
        cy.get('input[name="Pepperoni"]')
        .check().should('be.checked')
        cy.get('input[name="Bacon"]')
        .check().should('be.checked')
    })
     it('Drops down menu',()=>{
         cy.get('select').select('16"')
     })
        
    it('checks for submit',()=>{
        cy.get('[type=submit]').click()
    })
   
})