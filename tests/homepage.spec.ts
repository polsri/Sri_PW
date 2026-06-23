import {Page,Browser,test, expect} from "@playwright/test"

import { LoginPage } from "../src/pages/LoginPage";
import { HomePage } from "../src/pages/HomePage";

let login : LoginPage;
let home : HomePage;
test.beforeEach(async ({page})=>
{
    login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.doLogin("sridevi.sri9986@gmail.com","!QA2ws3ed")
    home = new HomePage(page);
}
)

test('Home Page Logout Visible', async ({})=>
{
   
   expect(await home.isLogoutVisible()).toBeTruthy();   
               
})

test('Home Page headers exists', async ({})=>
{
   let value:string[] =await  home.getAllHeaders();
    expect(value).toHaveLength(4);
    // Order of the values is manadtory
    expect(value).toEqual(["My Account","My Orders","My Affiliate Account","Newsletter"])

   for(let c of value)
   {

   }
               
})
