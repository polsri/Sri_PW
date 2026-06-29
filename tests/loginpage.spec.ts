import {test, expect} from "../src/fixtures/Page"

import { HomePage } from "../src/pages/HomePage";
//import {test, expect} from "../src/fixtures/Page";
import {CsvHelper} from "../src/utils/CsvHelper"

// Before each
test.beforeEach(async ({loginPage})=>
{

    await loginPage.gotoLoginPage();    
}
)

test('Login page', async ({loginPage})=>
{
   
    //expect(await login.getLoginPageTitle()).toBe("Account Login");
    let actulaTitle = await loginPage.getTitle();
    expect(actulaTitle).toBe('Account Login');                  
})

test('forgot passwrod', async ({loginPage})=>
{
    expect(await loginPage.isForgotPasswordLinkExist()).toBeTruthy();
               
})

test.skip('Do Login', async ({loginPage,homePage})=>
{
    await loginPage.doLogin(process.env.APP_USERNAME!,process.env.APP_PASSWORD!) 
       
    expect.soft(await homePage.isLogoutVisible()).toBeTruthy(); 
})

let value = CsvHelper.readCSV("src//data//logindata.csv");
for(let out of value)
{
    test(`test invalid login message ${out.username}`, async ({loginPage})=>
{
    await loginPage.doLogin(out.username!,out.password!)    
});
    
}