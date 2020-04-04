
describe ('navigates to monkey.now.sh', () => {
    it ('loads the page correctly', () => {
        cy.visit('https://monkey.now.sh/sign-in')
    })
    
   
    it('logs in the admin', () => {
        cy.get('input[name=email]').type('kenneth@monkeypesa.com')
        cy.get('input[name=password]').type('kenneth123#')
        cy.get('button[type=submit]').click()
    })
    // hits the api properly
    it('hits the graphql api properly', () => {
        cy.request('https://monkeypesa.herokuapp.com/console')
            .should(response => {
                expect(response.status).to.eq(200)
            })
    })

    // goes to dashboard after successful login
    it('redirects to dashboard', () => {
        cy.location('pathname').should('eq', '/dashboard')
    })

})