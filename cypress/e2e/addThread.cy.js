/**
 * - addThread spec
 *   - should display home page correctly
 *   - should display form when button is click
 *   - should display alert when tittle is empty
 *   - should display alert when category is empty
 *   - should display new thread when tittle, category and body is filled
 */
/* eslint-disable */  
describe('Login spec', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
     // mengisi username
     cy.get('input[placeholder="Email"]').type('hello@hello.com');
 
     // mengisi password
     cy.get('input[placeholder="Password"]').type('hello123');
  
     // menekan tombol Login
     cy.get('button').contains(/^Login$/).click();
    });

    it('should display login page correctly', () => { 
      // memverifikasi bahwa elemen yang berada di homepage ditampilkan
      cy.get('nav').contains(/^Home$/).should('be.visible');     
      cy.get('button').contains('Add New Threads').should('be.visible');
    });

    it('should display form when button is click', () => {
      // menekan tombol Add New Threads
      cy.get('button').contains('Add New Threads').click();
    
      cy.get('textarea').should('be.visible');
      cy.get('button').contains('Kirim').should('be.visible');
    });

    it('should display alert when tittle is empty', () => {
      // menekan tombol Add New Threads
      cy.get('button').contains('Add New Threads').click();
  
      // menekan tombol Kirim
      cy.get('button').contains('Kirim').click();
  
      // memverifikasi window.alert untuk menampilkan pesan dari API
      cy.on('window:alert', (str) => {
        expect(str).to.equal('"title" is not allowed to be empty');
      });
    });

    it('should display alert when category is empty', () => {
      // menekan tombol Add New Threads
      cy.get('button').contains('Add New Threads').click();
    
       // mengisi username
      cy.get('input[placeholder="Tittle"]').type('hello@hello.com');
      // mengisi tittle
      cy.get('textarea').type('hello');
  
      // menekan tombol Kirim
      cy.get('button').contains('Kirim').click();
  
      // memverifikasi window.alert untuk menampilkan pesan dari API
      cy.on('window:alert', (str) => {
        expect(str).to.equal('"category" is not allowed to be empty');
      });
    });

    it('should display new thread when tittle, category and body is filled', () => {
      // menekan tombol Add New Threads
      cy.get('button').contains('Add New Threads').click();
    
       // mengisi tittle
      cy.get('input[placeholder="Tittle"]').type('hello@hello.com');

      // mengisi category
      cy.get('input[placeholder="Category"]').type('hello');
  
      // mengisi tittle
      cy.get('textarea').type('hello');
      
      // menekan tombol Kirim
      cy.get('button').contains('Kirim').click();
  
      // memverifikasi window.alert untuk menampilkan pesan dari API
      cy.on('window:alert', (str) => {
        expect(str).to.equal('"body" is not allowed to be empty');
      });
    });

});