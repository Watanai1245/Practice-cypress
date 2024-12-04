describe('Automation Practice', () => {
  it('should load the homepage', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');
    cy.contains('Automation Practice').should('be.visible');
  });
});
