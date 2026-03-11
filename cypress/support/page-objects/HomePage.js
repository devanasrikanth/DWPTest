class HomePage {

  get titleInput() { return cy.get('#title'); }
  get authorInput() { return cy.get('#author'); }
  get genreSelect() { return cy.get('#genre'); }
  get isbnInput() { return cy.get('#isbn'); }
  get dateInput() { return cy.get('#publicationDate'); }
  get priceInput() { return cy.get('#price'); }
  get homePageHeading() { 
    return cy.get('h2').eq(1); 
  }
   get bookTitle() { return cy.get('input[name="title"]'); }
   get submitButton() { return cy.get('button[type=submit]')}

    verifyHomePageHeading(heading) {
    this.homePageHeading
      .should('be.visible')
      .and('contain.text', heading);
    
    return this;
  }

    addBookButton() {
       cy.contains('button', 'Add Book').click();
    }

    fillBookDetails(book) {
    if (book.title) this.titleInput.type(book.title);
    if (book.author) this.authorInput.type(book.author);
    if (book.genre) this.genreSelect.select(book.genre);
    if (book.isbn) this.isbnInput.type(book.isbn);
    if (book.publicationDate) this.dateInput.type(book.publicationDate);
    if (book.price) this.priceInput.type(book.price);
    }

    submit() {
      cy.get('button[type=submit]').click();
    }

    updateBookTitle(oldBook, newBook) {
    // Locate the row containing the title and click 'Edit' within that row
    cy.contains('table tbody tr', oldBook)
      .contains('button', 'Edit')
      .click();

    // Clear and type the new title
    this.bookTitle
      .clear()
      .type(newBook);

    // 3. Submit the change
    this.submitButton.click();

    // 4. Verification: check that the new title now exists
    cy.contains(newBook).should('be.visible');

    return this;
  }
}


  export default HomePage;