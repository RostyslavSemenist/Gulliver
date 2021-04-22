import { HomePage } from './pageobjects/HomePage'
import { CityFlightPage } from './pageobjects/CityFlightPage'

describe('Basic Tests', () => {

    //#region Pages
    const homePage = new HomePage()
    const citypage = new CityFlightPage()
    //#endregion

    it("Open Main Page", () => {
        homePage.openMainPage()
    })

    it("Verify that UI is ok", () => {
        homePage.verifyUI()
    })

    it("Navigate to the New-York flights page", () => {
        homePage.selectNewYork()
    })

    it("City info test", () => {
        citypage.NYC = Boolean(false)
        citypage.verifyCityPage()
    })

    it("Month Range Test", () =>{
        citypage.verifyMonthRange()
    })

    it("Price filtering: $599", () => {
        citypage.verifyPrice599()
    })

    it("Price filtering: $499", () => {
        citypage.verifyPrice499()
    })
})








