import {test,expect} from "../src/fixtures/Page"


test.beforeEach(async({loginPage})=>
{
    await loginPage.gotoLoginPage();
    await loginPage.doLogin(process.env.APP_USERNAME!,process.env.APP_PASSWORD!);
})


test.skip("Select specific product", async({searchResultsPage,productInfo})=>
{
    await searchResultsPage.doSearch("MacBook");
    await searchResultsPage.selectProduct("MacBook Pro");
    let output = await productInfo.getProductinfo();
    console.log(output);
    expect.soft(output.get("ProductHeader")).toBe("MacBook Pro");
    expect.soft(output.get("ProductImages")).toBe(4);
    expect.soft(output.get("Brand")).toBe("Apple");
    expect.soft(output.get("Product Code")).toBe("Product 18");
    expect.soft(output.get("Availability")).toBe("Out Of Stock");

    await productInfo.selectProductQuantity(2);
    await productInfo.addProductsToCart();
    let actaulMessage = await productInfo.validateProductAddedSuccessMessage();
    expect(actaulMessage).toContain("Success: You have added ");
})




