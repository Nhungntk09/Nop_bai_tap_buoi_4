describe('Bai tap buoi 3', () => {
  it('CB_1', () => {
    cy.visit('https://demoqa.com/');
    cy.get('.card-body').contains('Elements').should('be.visible');
  });
  it('CB_2', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.get('#userName').type('Nguyen Van A');
    cy.get('#userEmail').type('test@gmail.com');
    cy.get('#currentAddress').type('123 ABC Street');
    cy.get('#permanentAddress').type('456 XYZ Street');
    cy.get('.btn.btn-primary').click();
    cy.get('#name').should('contain', 'Nguyen Van A');
    cy.get('#email').should('contain', 'test@gmail.com');
    cy.get('#currentAddress.mb-1').should('contain', '123 ABC Street');
    cy.get('#permanentAddress.mb-1').should('contain', '456 XYZ Street');
  });
  it('CB_3', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa.fa-2x.fa-sign-in').click();
    cy.contains('Welcome to the Secure Area. When you are done click logout below.').should('be.visible');
    cy.get('.icon-2x.icon-signout').contains('Logout').should('be.visible');
  });
  it('CB_4', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('wrongpass')
    cy.get('.fa.fa-2x.fa-sign-in').click();
    cy.get('#flash').should('be.visible');
  });
  it('CB_5', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.get('#small-searchterms').type('computer');
    cy.get('.button-1.search-box-button').click();
    cy.get('.product-title').should('have.length.greaterThan', 0).and('contain', 'computer');
  });
  it('CB_6', () => {
    cy.visit('https://demowebshop.tricentis.com/apparel-shoes');
    cy.contains('.product-title', 'Blue Jeans').click();
    cy.get('#add-to-cart-button-36').click();
    cy.get('#bar-notification').should('be.visible').and('contain', 'The product has been added to your shopping cart');
    cy.get('#addtocart_36_EnteredQuantity').should('have.value', '1');
  });
  it('TB_7', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.userId).to.eq(1);
      expect(response.body).to.have.property('title');
      expect(response.body).to.have.property('body')
    });
  });
  it.only('TB_8', () => {
    // cy.visit('https://the-internet.herokuapp.com/upload');
    // cy.get('#file-upload').attachFile('exampletest.txt');
    // cy.get('#file-submit').click(); 
    // cy.contains('File Uploaded!').should('be.visible')
    // cy.get('#uploaded-files').should('be.visible').and('contain', 'exampletest.txt');

cy.visit('https://the-internet.herokuapp.com/upload');
cy.get('#file-upload').attachFile('exampletest.txt');
cy.get('').click;
cy.contains('File Uploaded!').should('be.visible');
cy.contains('#uploaded-files#uploaded-files')
0

  });
  it('TB_9', () => {
    cy.visit('https://demowebshop.tricentis.com/apparel-shoes');
    cy.get('.ico-login').click();
    cy.get('#Email').type('autotest_teca@gmail.com');
    cy.get('#Password').type('12345@');
    cy.get('.button-1.login-button').click();
    cy.get('#small-searchterms').type('Build your own expensive computer');
    cy.get('.button-1.search-box-button').click();
    cy.get('.button-2.product-box-add-to-cart-button').click();
    cy.get('#topcartlink').click();
    cy.get('#topcartlink').click();
    cy.get('#checkout').click();
    cy.get('#terms-of-service-warning-box').should('be.visible').and('contain', 'Please accept the terms of service before the next step.');
  });
});
describe('BankingProject', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    cy.get('button[ng-click="customer()"]').click();
    cy.get('#userSelect').select('Harry Potter');
    cy.get('button[type="submit"]').click();
  });
  it('TB_10', () => {
    cy.url().should('include', '/account');
    cy.contains('Welcome Harry Potter !!').should('be.visible');
    cy.contains('Account Number').should('be.visible');
    cy.contains('Balance').should('be.visible');
    cy.contains('Currency').should('be.visible');
  });
  it('TB_11', () => {
    cy.get('button[ng-class="btnClass2"]').click();
    cy.get('input[ng-model="amount"]').type('500');
    cy.get('button.btn-default').click();
    cy.contains('Deposit Successful').should('be.visible');
    cy.get('.ng-binding').should('be.visible').and('contain', '500');
    cy.get('form[ng-submit="deposit()"]').should('be.visible');
  });
  it('TB_12', () => {
    cy.get('button[ng-click="deposit()"]').should('be.visible').click();
    cy.get('input[ng-model="amount"]').type('500');
    cy.get('button.btn-default').click();
    cy.get('button[ng-class="btnClass3"]').click();
    cy.contains('Amount to be Withdrawn :').should('be.visible');
    cy.get('input[placeholder="amount"]').type('300');
    cy.get('button.btn-default').click();
    cy.get('.ng-binding').should('be.visible').and('contain', '200');
    cy.get('form[ng-submit="withdrawl()"]').should('be.visible');
  });
  it('TB_13', () => {
    cy.get('button[ng-click="deposit()"]').should('be.visible').click();
    cy.get('input[ng-model="amount"]').type('500');
    cy.get('button.btn-default').click();
    cy.get('button[ng-class="btnClass3"]').click();
    cy.contains('Amount to be Withdrawn :').should('be.visible');
    cy.get('input[placeholder="amount"]').type('300');
    cy.get('button.btn-default').should('be.visible').click();
    cy.get('.ng-binding').should('be.visible').and('contain', '200');
    cy.get('form[ng-submit="withdrawl()"]').should('be.visible');
    cy.wait(4000);
    cy.get('button[ng-click="transactions()"]').click();
    cy.get('table tr').should('have.length.at.least', 2);
    cy.get('table tr').should('contain.text', '500');
    cy.get('table tr').should('contain.text', '300');
  });
  });

describe('practice-form', () => {
  it('TB_14', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@test.com');
    cy.get('label[for="gender-radio-1"]').click(); 
    cy.get('#userNumber').type('0987654321');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__month-select').select('May');
    cy.contains('.react-datepicker__day', '15').click();
    cy.get('#hobbies-checkbox-1').check({ force: true });
    cy.get('#hobbies-checkbox-3').check({ force: true });
    cy.get('#currentAddress').type('123 Test Street, Hanoi');
    cy.get('#state').should('contain', 'Select State').type('NCR{enter}');
    cy.get('#city').should('contain', 'Select City').type('Delhi{enter}');
    cy.get('#uploadPicture').attachFile('test_image.jpg');
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').should('be.visible').and('contain', 'Thanks for submitting the form');
    cy.contains('td', 'Student Name').next().should('have.text', 'John Doe');
  });
  it('TB_15', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('a[href="/web/index.php/pim/viewMyDetails"]').should('be.visible').click();
    cy.get('a[href="/web/index.php/pim/contactDetails/empNumber/7"]').should('be.visible').click();
    cy.contains('label', 'Street 1').closest('.oxd-input-group').within(() => {
      cy.get('input').clear().type('123 Test St');
    });
    cy.contains('label', 'Mobile').closest('.oxd-input-group').within(() => {
      cy.get('input').clear().type('0901234567');
    });
    cy.contains('label', 'Work Email').closest('.oxd-input-group').within(() => {
      cy.get('input').clear().type('test@email.com')
    });
    cy.get('button[type="submit"]').click();

    cy.contains('Successfully Updated').should('be.visible');

    cy.contains('label', 'Street 1').closest('.oxd-input-group').within(() => {
      cy.get('input').should('have.value', '123 Test St');
    });
    cy.contains('label', 'Mobile').closest('.oxd-input-group').within(() => {
      cy.get('input').should('have.value', '0901234567');
    });
    cy.contains('label', 'Work Email').closest('.oxd-input-group').within(() => {
      cy.get('input').should('have.value', 'test@email.com')
    });
  });
    });

