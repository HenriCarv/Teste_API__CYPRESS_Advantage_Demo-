describe('Post Change item image', () => {
  let authToken;
  let currentUserId;

  before(() => {
    cy.api({
      method: 'POST',
      url: '/accountservice/accountrest/api/v1/login',
      body: {
        email: 'teste@teste.com.br',
        loginPassword: '12Test!@#',
        loginUser: 'test12309'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('statusMessage');
      const status = response.body.statusMessage;

      expect(status).to.have.property('token');
      expect(status).to.have.property('userId');

      authToken = status.token;
      currentUserId = status.userId;

      cy.wrap(authToken).as('authToken');
      cy.wrap(currentUserId).as('currentUserId');
    });
  });

  it('Change the image of itemId 35', function () {
    const userId = currentUserId;
    const source = 'source';
    const Color = 'Blue';
    const product_id = '35';

    cy.fixture('note.jpg', 'base64').then((fileContent) => {
      // Converte o conteúdo base64 em um Blob
      const byteCharacters = atob(fileContent); // Converte de base64 para binário
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });

      const formData = new FormData();
      formData.append('file', blob, 'note.jpg'); // Envia o arquivo convertido

      cy.api({
        method: 'POST',
        url: `/catalog/api/v1/product/image/${userId}/${source}/${Color}?product_id=${product_id}`,
        headers: {
          Authorization: `Bearer ${this.authToken}`,
          'Content-Type': 'multipart/form-data', // Certifique-se de que o tipo de conteúdo seja multipart/form-data
        },
        body: formData,
        failOnStatusCode: false, // Para evitar falhas no código caso a resposta seja 500 ou outro erro
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
