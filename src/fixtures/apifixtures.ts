import { apiHelper } from "../utils/apihelper";
import {test as baseTest} from "@playwright/test"
import { APIRequestContext } from "@playwright/test";




type pageFixtures =
{
    apihelper:apiHelper;
}



baseTest.extend<pageFixtures>(
{

     apihelper: async({request},use)=>
    {   
        let apihelper = new apiHelper(request,"")

        await use(apihelper);
    }
})

export {expect} from "@playwright/test"

