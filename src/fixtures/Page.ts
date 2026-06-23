import {test as baseTest} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage";
import { RegisterAccountPage } from "../pages/RegisterAccountPage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { ProductInfo } from "../pages/ProductInfo";
import { BasePage } from "../pages/BasePage";


type pageFixtures =
{
    loginPage:LoginPage;
    homePage:HomePage;
    registerAccountPage:RegisterAccountPage
    searchResultsPage:SearchResultsPage
    productInfo:ProductInfo
    basePage:BasePage
}


export let test = baseTest.extend<pageFixtures>(
    {
        loginPage: async({page},use)=>
        {
            let loginPage = new LoginPage(page);
            await use(loginPage);
        },

        homePage: async({page},use)=>
        {
            let homePage = new HomePage(page);
            await use(homePage);
        },
        registerAccountPage: async({page},use)=>
        {
            let registerAccountPage = new RegisterAccountPage(page);
            await use(registerAccountPage);
        },
        searchResultsPage: async({page},use)=>
        {
            let searchResultsPage = new SearchResultsPage(page);

            await use(searchResultsPage);
        },
        productInfo: async({page},use)=>
        {
            let productInfo = new ProductInfo(page);

            await use(productInfo);
        },
        basePage: async({page},use)=>
        {
            let basePage = new BasePage(page);

            await use(basePage);
        }
    }

)
 

export {expect} from "@playwright/test"