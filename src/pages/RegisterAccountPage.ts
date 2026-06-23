import {Page} from "@playwright/test"
import { BasePage } from "./BasePage"
import { TIMEOUT } from "node:dns"


export class RegisterAccountPage extends BasePage
{

    private readonly firstName
    private readonly lastName
    private readonly email
    private readonly telephone
    private readonly password
    private readonly passwordConfirm
    private readonly newsletterRadio
    private readonly privacyPolicyCheckbox
    private readonly continueButton



    constructor(page:Page)
    {
        super(page);

        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.locator("#input-lastname");
        this.email = page.getByPlaceholder("E-Mail");
        this.telephone = page.locator("input[name='telephone']");
        this.password = page.locator("#input-password");
        this.passwordConfirm = page.locator("input[@type='password']");
        this.newsletterRadio = page.getByRole("radio",{name:'No'});
        this.privacyPolicyCheckbox = page.locator("input[@name='agree']");
        this.continueButton = page.getByRole("button",{name:'Continue'});


    }

    async gotoLoginPage(): Promise<void>
    {
        await this.page.goto("opencart/index.php?route=account/register");
        await this.page.waitForURL("opencart/index.php?route=account/register");
    }

    async enterPersonalDetails(firstName:string,lastName:string,email:string,telephone:string)
    {
        await this.page.waitForTimeout(6000);
        await this.firstName.waitFor({timeout:5000,state:"visible"});
        await this.firstName.click();
        await  this.firstName.fill(firstName);  
        await this.lastName.fill(lastName);  
        await this.email.fill(email);  
        await  this.telephone.fill(telephone);  
    }

}