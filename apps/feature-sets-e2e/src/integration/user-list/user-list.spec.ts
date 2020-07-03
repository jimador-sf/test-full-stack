describe('feature-sets: UserList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=userlist--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to feature-sets!');
  });
});
