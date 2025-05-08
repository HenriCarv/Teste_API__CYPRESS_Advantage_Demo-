// cypress/e2e/GET/getProductById.js

describe('Get Product by ID API Test', () => {
  it('should get product with ID 35', () => {
    cy.api({
      method: 'GET',
      url: '/catalog/api/v1/products/35'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('productId', 35);
    });
  });
});