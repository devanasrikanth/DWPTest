/// <reference types="cypress" />
import LoginPage from '../../support/page-objects/LoginPage';
import HomePage from '../../support/page-objects/HomePage';

const loginPage = new LoginPage()
const homePage = new HomePage()

describe('Login Page - Enter the login and verify the home page heading - Welcome, Admin', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername('admin');
    loginPage.fillPassword('admin');
    loginPage.submit();
  })
  
//Add Book to the list
   it('Add Book', () => {
    homePage.addBookButton();
     const book = {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Fantasy",
      isbn: "23445678",
      publicationDate: "2000-10-12",
      price: "£35"
    };
    homePage.fillBookDetails(book);
    homePage.submit();
    homePage.verifyHomePageHeading('Book List');
   })

//Edit the book 
   it('Edit the book from the list', () => {
    homePage.updateBookTitle('The Very Busy Spider', 'Frozen');
     // Asserting the new book title
    cy.contains('Frozen').should('be.visible');
   })

//Delete the Book
    it('Delete the Frozen book from the list', () => {
    homePage.verifyHomePageHeading('Book List');
    cy.get('table tbody tr td').contains('The Very Busy Spider')
    cy.contains('button', 'Edit').click()
    cy.get('input[name="title"]').clear();
    cy.get('input[name="title"]').type('Frozen')
    cy.get('button[type="submit"]').click();
    cy.contains('Frozen').should('exist');
    cy.contains('button', 'Delete').click();
    cy.contains('Frozen').should('not.exist');
    })
})
