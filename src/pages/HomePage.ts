import { Locator,Page } from "@playwright/test";
import {BasePage} from "./BasePage"


export class HomePage extends BasePage
{

   // Private Locators

    private readonly logout: Locator;
    private readonly headers: Locator;


    // Constructo of the class and initlaize the locators
    constructor(page:Page)
    {
        super(page);
        this.logout=page.getByRole("link",{name:'Logout'})
        this.headers=page.getByRole("heading",{level:2})


    }

    // Public page actions(methods)/behaviour
    async isLogoutVisible(): Promise<boolean>
    {
        this.page.waitForTimeout(2000);
        return await this.logout.isVisible();
    }

    // Public page actions(methods)/behaviour
    async getAllHeaders(): Promise<string[]>
    {
        await this.page.waitForTimeout(1000);
        return await this.headers.allInnerTexts();
    }

    


}