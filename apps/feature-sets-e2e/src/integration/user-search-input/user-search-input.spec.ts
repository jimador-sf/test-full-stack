describe('feature-sets: UserSearchInput component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=usersearchinput--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to feature-sets!');
  });
});
