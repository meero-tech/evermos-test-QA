class Login{
    txtPhoneNumber(){
        return cy.xpath("//input[@placeholder='Nomor Telepon Anda']")
    }
    txtPassword(){
        return cy.xpath("//input[@placeholder='Kata Sandi Anda']")
    }
    btnLogin(){
        return cy.xpath("//button[@type='button']")
    }

}
export default Login;