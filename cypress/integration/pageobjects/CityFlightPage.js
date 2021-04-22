export class CityFlightPage {

    //#region Info
    //Locators
    julyAugustButton = () => cy.contains('יולי-אוגוסט')
    mayJuneButton = () => cy.contains('מאי-יוני')
    priceButton599 = () => cy.contains('$599')
    priceButton499 = () => cy.contains('$')
    flightPrices = () => cy.get('.col-xs-6').find('.seo-deal-detail-price')
    flightDate = () => cy.get('.seo-deal-detail-date')
    availableFlights = () => cy.get('.seo-deal-detail-title')

    //Selected City
    NYC = new Boolean(false)
    LON = new Boolean(false)

    //#endregion

    verifyCityPage = () => {
        this.availableFlights().should('be.visible')
        if (this.NYC) {
            this.availableFlights().should('to.contain', 'ניו יורק')
        }
    }

    verifyMonthRange = () => {

        //July-August

        this.julyAugustButton().click()
        this.flightDate().should('to.contain', '.07')
            .and('to.contain', '.08')

        //May-June

        this.mayJuneButton().click()
        this.flightDate().should('to.contain', '.05')
            .and('to.contain', '.06')
    }

    verifyPrice599 = () => {
        this.priceButton599().click()
        this.flightPrices().each($el => {
            const price = parseInt(
                $el.text()
                    .replace(/[^\d]/g, ''),
                10
            )

            expect(price).to.be.lessThan(599)
        })
    }

    verifyPrice499 = () => {
        this.priceButton499().click()
        this.flightPrices().each($el => {
            const price = parseInt(
                $el.text()
                    .replace(/[^\d]/g, ''),
                10
            )
            expect(price).to.be.lessThan(499)
        })
    }
}