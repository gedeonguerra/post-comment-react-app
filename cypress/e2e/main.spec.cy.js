describe('template spec', () => {

  it('passes', () => {
    // Acessa a aplicação localmente (em ambiente de desenvolvimento).
    cy.visit('localhost:5173/')

    // Garante que a caixa de perfil do usuário esteja presente na tela.
    cy.get('[data-qa="profile-box"]')

    // Localiza o primeiro campo de input de comentários e digita o texto de teste.
    cy.get('[data-qa="comment-input"]').first().type('Test 123')

    // Clica no primeiro botão de publicação para submeter o comentário.
    cy.get('[data-qa="publish-button"]').first().click()

    // Verifica se o comentário recém-postado está visível na interface.
    cy.get('[data-qa="comment-text"]').contains('Test 123')

    // Itera por todos os comentários exibidos na tela.
    cy.get('[data-qa="comment-text"]').each(($element) => {
      // Se o texto do comentário for igual ao que foi digitado...
      if ($element.text() === 'Test 123') {
        // Localiza o botão de deletar associado a esse comentário e clica nele.
        cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
      }
    })
  })

})
