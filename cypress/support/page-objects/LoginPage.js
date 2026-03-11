class LoginPage {
    visit() {
      cy.visit('https://frontendui-librarysystem.onrender.com/login');
    }

    fillUsername(username) {
      cy.get('#username').type(username);
    }

    fillPassword(password) {
      cy.get('#password').type(password);
    }

    submit() {
      cy.get('button[type=submit]').click();
    }
  }

  export default LoginPage;