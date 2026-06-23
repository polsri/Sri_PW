import {test as bastest, Locator, Page} from "@playwright/test"
import { BasePage } from "./BasePage"



export class SearchResultsPage extends BasePage
{
    private readonly searchTextField
    private readonly searchIcon
    private readonly searchResults 
   // private readonly selectProduct 


    constructor(page:Page)
    {
        super(page);
        this.searchTextField =  page.getByPlaceholder("Search");
        this.searchIcon =  page.locator(".input-group-btn");
        this.searchResults =  page.locator(".product-layout");
      //  this.selectProduct = page.getByRole("link"{name:})

    }

    // actions
    async doSearch(productName:string): Promise<void>
    {
        await this.searchTextField.waitFor({state:"visible"});
        await this.searchTextField.fill(productName);
        await this.searchIcon.click();
    }

    async getProductResultCount():Promise<number>
    {
        await this.searchResults.first().waitFor({timeout:6000,state:"visible"});
        let out =  await this.searchResults.count();
        return out;
    }

     async selectProduct(productName:string)
    {
        this.page.getByRole("link",{name:productName}).first().click();

    }

}