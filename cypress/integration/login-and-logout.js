import Login from '../newpages/web/Login.js'
import Akun from '../newpages/web/Akun.js'

describe('UI Testing : Login', () => {
    let url = 'https://evermos.com/login';
    beforeEach(() => {
        cy.visit(url)
      })
   
    var login = new Login()
    var akun = new Akun()
    let phoneNumber
    let password 

    it('01 Before Login : See the login page', () => {
          login.txtPhoneNumber().should('be.visible');
          login.txtPassword().should('be.visible');
          login.btnLogin().should('be.visible');
      }) 

      it('02 Login with incorrect phone number & password',()=> {
        phoneNumber = "628122333334444";
        password = "passwo44rd";
        login.txtPhoneNumber().type(phoneNumber);
        login.txtPassword().type(password);
        login.btnLogin().click();
        cy.contains("Nomor ini belum terdaftar sebagai reseller").should('exist');


      })
      
      it('03 Login with correct credentials and then logout',()=> {
        phoneNumber = "6281223334444";
        password = "password";
        login.txtPhoneNumber().type(phoneNumber);
        login.txtPassword().type(password);
        login.btnLogin().click();
        cy.wait(10000)
        cy.url().should('eq', 'https://evermos.com/catalog')
        akun.mnuAkun().click()
        akun.btnLogout().click()
        cy.url().should('eq', 'https://evermos.com/login')

      })
    })
    