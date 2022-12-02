class Akun{
    mnuAkun(){
        return cy.xpath(`//a[@href='/user']//i//span`)
    }
    btnLogout(){
        return cy.xpath(`//span[normalize-space()='Keluar Aplikasi']`)
    }
}

export default Akun;