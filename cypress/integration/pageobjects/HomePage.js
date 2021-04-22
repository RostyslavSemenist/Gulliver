export class HomePage {


    //#region Locators

    //URL
    mainpage = "https://www.gulliver.co.il/"

    //Locators
    textMenuItem = () => cy.contains('בחו"ל')
    logoImage = () => cy.get('img[alt="Gulliver"]')
    searchBox = () => cy.get('.se-fieldset.search-btn')
    hotDealPrice = () => cy.get('.hot-deal-detail.price')
    losAngelesFlights = () => cy.get(':nth-child(2) > .footer-category-container > :nth-child(6) > a')
    newYorkFlights = () => cy.get(':nth-child(2) > .footer-category-container > :nth-child(1) > a')
    //#endregion

    //Tests
    openMainPage = () => {
        cy.visit(this.mainpage)
        this.logoImage().should('be.visible')

    }
    
    verifyUI = () => {
        this.logoImage().should('be.visible')
        this.searchBox().should('be.visible')
        this.textMenuItem().should('be.visible')
        this.hotDealPrice().should('be.visible')
        this.hotDealPrice().should('not.to.be.empty')
            .and('not.to.have.text', '0')
    }

    selectNewYork = () => {
        this.losAngelesFlights().should('be.visible').click()
        this.newYorkFlights().should('be.visible').click()
    }
}