import Homepage from '../newpages/web/Homepage.js'
import Login from '../newpages/web/Login'
//inisiation insert data in to variable

var homepage = new Homepage()
var login = new Login()
let phoneNumber
let password
describe('Test Homepage', () => {
    beforeEach(() => {
        cy.visit('https://evermos.com/login')
        phoneNumber = "6281223334444";
        password = "password";
        login.txtPhoneNumber().type(phoneNumber);
        login.txtPassword().type(password);
        login.btnLogin().click();
      })

    it('Search Existing Product', () => {
          homepage.txtSearchProductHome().click()
          homepage.txtSearchProduct().type('SARUNG{enter}')

      }) 

    it('Search Non-Existing Product', () => {
        homepage.txtSearchProductHome().click()
        homepage.txtSearchProduct().type('MESIN CUCI RUSAK{enter}')
    }) 
    
    })
    