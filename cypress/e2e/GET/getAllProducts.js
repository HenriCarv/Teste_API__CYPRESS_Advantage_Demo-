// cypress/e2e/GET/getAllProducts.js

describe('Advantage Online Shopping API Tests', () => {
  it('should get all products', () => {
    cy.api({
      method: 'GET',
      url: '/catalog/api/v1/products'
    }).then((response) => {
      expect(response.status).to.eq(200);
      
      // Log da resposta completa para inspeção
      cy.log('Resposta completa da API:', JSON.stringify(response.body));

      // Verifica se o corpo da resposta é um objeto
      expect(response.body).to.be.an('object');

      // Verifica se há uma propriedade 'products' que é um array
      expect(response.body).to.have.property('products').that.is.an('array');

      // Verifica se o array de produtos não está vazio
      expect(response.body.products).to.have.length.above(0);

      // Verifica se o primeiro produto tem a propriedade 'productId'
      expect(response.body.products[0]).to.have.property('productId');
    });
  });
});