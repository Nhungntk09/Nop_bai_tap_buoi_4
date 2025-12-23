describe('Bai tap buoi 4', () => {
  it('Test case 1- Đăng nhập thành công', () => {
    cy.visit('https://practice.expandtesting.com/login');
    cy.url().should('include', '/login');
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#username').type('practice');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('#submit-login').click();
    cy.url().should('include', '/secure');
    cy.get('#flash').should('be.visible').and('contain', 'You logged into a secure area!');
    cy.contains('Logout').should('be.visible');;
  });
  it('Test case 2- Sai tên đăng nhập', () => {
    cy.visit('https://practice.expandtesting.com/login');
    cy.url().should('include', '/login');
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#username').type('wrongUser');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('#submit-login').click();
    cy.url().should('include', '/login');
    cy.url().should('not.include', '/secure');
    cy.get('#flash').should('be.visible').and('contain', 'invalid!');
  });
  it('Test case 3- Sai mật khẩu', () => {
    cy.visit('https://practice.expandtesting.com/login');
    cy.url().should('include', '/login');
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#username').type('practice');
    cy.get('#password').type('WrongPassword!');
    cy.get('#submit-login').click();
    cy.url().should('include', '/login');
    cy.url().should('not.include', '/secure');
    cy.get('#flash').should('be.visible').and('contain', 'invalid!');
  });
  it("Kéo 3 hình tròn vào HCN", () => {
    cy.visit("https://practice.expandtesting.com/drag-and-drop-circles");
    const circles = [".red", ".blue", ".green"];
    for (let i = 0; i < circles.length; i++) {
      cy.get(circles[i], { timeout: 10000 }).then($item => {
        const dataTransfer = new DataTransfer();
        cy.wrap($item).trigger("dragstart", { dataTransfer });
        cy.get("#target")
          .trigger("dragover", { dataTransfer })
          .trigger("drop", { dataTransfer });

      });
    }
  });
  it('Tìm đến phần tử 48.48', () => {
    cy.visit('https://practice.expandtesting.com/large');
    cy.contains('td', '48.48').scrollIntoView().should('be.visible');
  });
  it('Kéo slider lên giá trị 3', () => {
    cy.visit('https://practice.expandtesting.com/horizontal-slider');
    cy.get('input[type="range"]').invoke('val', 3).trigger('change');
    cy.get('#range').should('have.text', '3');
  });
  it('Right click and show context menu alert', () => {
    cy.visit('https://practice.expandtesting.com/context-menu');
    cy.on('window:alert', (text) => {
      expect(text.trim()).to.eq('You selected a context menu');
    });
    cy.get('#hot-spot').rightclick();
  });

  it('Thực hiện chờ tới khi task hoàn tất- ko dùng wait by ms', () => {
    cy.intercept('GET', '**/*').as('Load');
    cy.visit('https://practice.expandtesting.com/slow');
    cy.wait('@Load');
    cy.contains('The slow task has finished. Thanks for waiting!', { timeout: 20000 }).should('be.visible');
  });

  it('click vào nút màu vàng 10 lần', () => {
    cy.visit('https://practice.expandtesting.com/challenging-dom');
    for (let i = 0; i < 10; i++) {
      cy.get('.btn.btn-warning.mb-2')
        .first()
        .click();
      cy.url().should('include', 'challenging-dom');
    }
  });

  it('Tìm được phần tử ở trang mới bật lên', () => {
    cy.visit('https://practice.expandtesting.com/windows');
    cy.contains('Click Here').invoke('removeAttr', 'target').click();
    cy.contains('Example of a new window page for Automation Testing Practice').should('be.visible');
  });
  it('Thực hiện thao tác Alert', () => {
    cy.visit('https://practice.expandtesting.com/js-dialogs');
    cy.on("window:alert", (text) => {
      expect(text).to.contain("I am a Js Alert");
    });
    cy.get('#js-alert').click();
  });

//  it('Thực hiện thao tác Alert', () => {
//        cy.visit('https://practice.expandtesting.com/js-dialogs');
//   cy.on("window:confirm", (text) => {
//       expect(text).to.contain("I am a Js Confirm"); 
//       return false;
//     });
//    cy.contains('Click for JS Confirm').click();
//   cy.get('#result').should('have.text', 'You clicked: Cancel');
// });
it('Geolocation - Check City is displayed', () => {
  cy.visit('https://practice.expandtesting.com/geolocation', {
    onBeforeLoad(win) {
      cy.stub(win.navigator.geolocation, 'getCurrentPosition')
        .callsFake((cb) => {
          cb({
            coords: {
              latitude: 21.0278,   
              longitude: 105.8342
            }
          });
        });
    }
  });
  cy.get('#geoBtn').click();
  cy.get('#city-name').should('be.visible').and('not.be.empty');
});

});