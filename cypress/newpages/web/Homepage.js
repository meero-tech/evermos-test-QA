class Homepage{
    lblTitle(){
        return cy.xpath("//h1[normalize-space()='Welcome!']");
    }
    txtSearchProductHome(){
        return cy.xpath(`//span[@class='appHead__search__input']`)
    }
    txtSearchProduct(){
        return cy.xpath(`//input[@placeholder='Cari Produk di Evermos…']`)
    }
}

export default Homepage;