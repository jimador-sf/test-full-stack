describe('feature-sets: FeatureSets component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=featuresets--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to feature-sets!');
  });
});
