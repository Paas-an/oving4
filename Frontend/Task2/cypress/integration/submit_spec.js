// cypress/integration/form_spec.js
describe('Form Validation', () => {
    beforeEach(() => {
      // Assuming your form is on the homepage
      cy.visit('/')
    })
  
    it('Submit button should be disabled if the form is invalid', () => {
      // Assuming the button is disabled when the form is invalid
      cy.get('#submitButton').should('be.disabled')
  
      // Fill the form with invalid data
      cy.get('#inputField').type('Invalid data')
  
      // Check if the button is still disabled
      cy.get('#submitButton').should('be.disabled')
    })
  
    it('Form shows correct response from server when form contains valid data and Submit button is clicked', () => {
      // Fill the form with valid data
      cy.get('#inputField').type('Valid data')
  
      // Stub a response from your server
      cy.intercept('POST', '/your-form-endpoint', {
        statusCode: 200,
        body: { message: 'Form submitted successfully' }
      })
  
      // Click the submit button
      cy.get('#submitButton').click()
  
      // Check if the form shows the correct response
      cy.contains('Form submitted successfully')
    })
  })
  