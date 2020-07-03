describe('feature-sets: UserAvatar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=useravatar--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to feature-sets!');
  });
});
