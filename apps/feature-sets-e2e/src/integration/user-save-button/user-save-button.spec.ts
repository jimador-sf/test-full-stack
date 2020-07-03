describe('feature-sets: UserSaveButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=usersavebutton--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to feature-sets!');
  });
});
