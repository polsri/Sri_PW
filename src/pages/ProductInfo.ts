import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage"


export class ProductInfo extends BasePage
{

    // Private Locators
    private readonly header: Locator;
    private readonly productImages:Locator
    private readonly productMetaData:Locator
    private readonly productPricing:Locator
    private readonly map:Map<string, string|Number>
    private readonly quantity:Locator
    private readonly addToCart:Locator
    private readonly successMessage

    // Constructor of the class.Initiate the Locators
    constructor(page:Page)
    {
        super(page);
        this.header= page.locator("h1");
        this.productImages= page.locator("div#content li img")
        this.productMetaData= page.locator("div#content ul.list-unstyled:nth-of-type(1) li") ;
        this.productPricing= page.locator("div#content ul.list-unstyled:nth-of-type(2) li");
        this.map = new Map<string,string |Number>();
        this.quantity = page.locator("#input-quantity");
        this.addToCart = page.getByText("Add to Cart");
        this.successMessage = page.locator('#product-product').locator(".alert");

    }

    // actions
    async getProductinfo():Promise<Map<string,string |Number>>
    {
        this.map.set("ProductHeader",await this.getProductHeader())
        this.map.set("ProductImages",await this.getProductImage())
        await this.getProductMetaData();
        await this.getProductPricing();

        return this.map;
    }


    async getProductHeader():Promise<string>
    {
        await this.page.waitForTimeout(5000);
        return await this.header.innerText();
    }

    async getProductImage():Promise<Number>
    {

        return await this.productImages.count();
    }

    // Brand: Apple
    // Product Code: Product 18
    // Reward Points: 800
    // Availability: Out Of Stock
    private async getProductMetaData():Promise<void>
    {
        let metaData = await this.productMetaData.allInnerTexts();
        for(let data of metaData)
        {
            let meta = data.split(":");

            let metaKey= meta[0].trim();
            let metaValue= meta[1].trim();
            this.map.set(metaKey,metaValue);

        }
    }

    // $2,000.00
    // Ex Tax: $2,000.00
    private async getProductPricing():Promise<void>
    {
        let pirceData = await this.productPricing.allInnerTexts();
        
            let productPrice= pirceData[0].trim();
            let exTaxPrice= pirceData[1].split(":")[1].trim();
            this.map.set("ProdcutPrice",productPrice);
            this.map.set("EXTaxPrice",exTaxPrice);


    }

    async selectProductQuantity(quantity:number):Promise<void>
    {
        await this.page.waitForTimeout(5000);
        await this.quantity.clear();
        await this.quantity.fill(quantity.toString());

    }


    async addProductsToCart():Promise<void>
    {
        await this.addToCart.click();
    }

    async validateProductAddedSuccessMessage():Promise<string>
    {
        return await this.successMessage.innerText();
    }

}