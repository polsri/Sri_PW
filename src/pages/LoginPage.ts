import { Locator,Page } from "@playwright/test";
import {BasePage} from "./BasePage"


export class LoginPage extends BasePage
{

   // Private Locators

    private readonly emailId: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    private readonly forgottenPassword: Locator;
    //private readonly logo: Locator;
    

    // Constructo of the class and initlaize the locators
    constructor(page:Page)
    {
        super(page);
        this.emailId=page.locator("#input-email");
        this.password=page.locator("#input-password");
        this.loginButton=page.getByRole("button",{name:'Login'})
        this.forgottenPassword=page.getByRole("link",{name:"Forgotten Password"}).first();
      //  this.logo =page.getByAltText("naveenopencart");

    }

    // Public page actions(methods)/behaviour
    async gotoLoginPage(): Promise<void>
    {
        await this.page.goto("opencart/index.php?route=account/login");
    }

    // Public page actions(methods)/behaviour
    async isForgotPasswordLinkExist(): Promise<boolean>
    {
        return  this.forgottenPassword.isVisible();
    }

    async doLogin(userName: string, password: string) : Promise<void>
    {
        await this.emailId.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();

    }


}