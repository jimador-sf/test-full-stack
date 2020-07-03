describe('feature-sets: UserTile component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=usertile--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to feature-sets!');
    });
});
