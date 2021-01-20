describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon slowpoke page can be navigated to and when clicking the next button slowbro is the next pokemon', function() {
    cy.visit('http://localhost:5000/')
    cy.contains('slowpoke')
    cy.contains('slowpoke').click()
    cy.location().should((loc) => expect(loc.toString()).to.eq('http://localhost:5000/pokemon/slowpoke'))
    cy.contains('Next').click()
    cy.contains('slowbro')
  })
})