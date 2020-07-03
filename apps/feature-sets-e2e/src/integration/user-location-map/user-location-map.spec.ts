describe('feature-sets: UserLocationMap component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=userlocationmap--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to feature-sets!');
  });
});
