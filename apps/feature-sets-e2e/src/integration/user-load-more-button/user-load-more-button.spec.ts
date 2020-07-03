describe('feature-sets: UserLoadMoreButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=userloadmorebutton--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to feature-sets!');
  });
});
