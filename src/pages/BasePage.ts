import { Locator, Page } from "@playwright/test";

export class BasePage
{

    // within this class or any childs of Basepage class can be accessed
    protected readonly page: Page
    protected readonly logo: Locator;
    protected readonly currency: Locator;




    constructor (page:Page)
    {
        this.page =page;
        this.logo = page.getByAltText("naveenopencart");
        this.currency = page.getByText("Currency");

    }

    // Common methods
    async isLogoVisible():Promise<boolean>
    {
       return await this.logo.isVisible();
    }

    async isCurrencyVisible():Promise<boolean>
    {
       return await this.currency.isVisible();
    }

    
    // Generic methods
    async getTitle():Promise<string>
    {
        await this.page.waitForTimeout(2000);
        return await this.page.title();
    }

    getCurrentURL():string
    {
        //await this.page.waitForTimeout(2000);
        return this.page.url();
    }

    async waitForPageLoad():Promise<void>
    {
        //await this.page.waitForTimeout(2000);
        return await this.page.waitForLoadState("load");
    }


}