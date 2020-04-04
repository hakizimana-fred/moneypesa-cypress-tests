// first logs in user to get to dashboard
describe ('navigates to monkey.now.sh', () => {
    it ('loads the page correctly', () => {
        cy.visit('https://monkey.now.sh/sign-in')
    })

    it('logs in the admin', () => {
        cy.get('input[name=email]').type('kenneth@monkeypesa.com')
        cy.get('input[name=password]').type('kenneth123#')
        cy.get('button[type=submit]').click()
        
        cy.location('pathname').should('eq', '/dashboard')

    })
    // makes sure we're on the dashboard page
    it('makes sure we are on the dashboard page', () => {
        cy.url().should('include', '/dashboard')

      cy.get('button[type=button]').click()
    })
    
})