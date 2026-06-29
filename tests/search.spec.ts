import {test,expect} from "../src/fixtures/Page"
import {CsvHelper} from "../src/utils/CsvHelper"


test.beforeEach( async ({loginPage})=>
{
    await loginPage.gotoLoginPage();
    await loginPage.doLogin(process.env.APP_USERNAME!,process.env.APP_PASSWORD!);
});


test.skip('Search prodcuts', async ({searchResultsPage})=>
   {
    const data = CsvHelper.readCSV('src/data/productdata.csv');

    for(let out of data)
    
    {

        await searchResultsPage.doSearch(out.searchProduct!);
        let count =  await searchResultsPage.getProductResultCount();
        expect(count).toBe(3);
        await searchResultsPage.selectProduct(out.productName!);
        expect(await searchResultsPage.getTitle()).toBe(out.productName!);    
        
    }
  });

