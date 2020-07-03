describe('feature-sets: UserEditCancelButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=usereditcancelbutton--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to feature-sets!');
  });
});
