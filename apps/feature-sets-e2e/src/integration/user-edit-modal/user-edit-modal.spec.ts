describe('feature-sets: UserEditModal component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=usereditmodal--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to feature-sets!');
  });
});
