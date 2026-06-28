import { apiHelper } from "../utils/apiHelper";
import {test as baseTest} from "@playwright/test"
import { APIRequestContext } from "@playwright/test";


const apiURL= "https://gorest.co.in";

type pageFixtures =
{
    apihelper:apiHelper;
}



export let test = baseTest.extend<pageFixtures>(
{

     apihelper: async({request},use)=>
    {   
        let apihelper = new apiHelper(request, apiURL);

        await use(apihelper);
    }
})

export {expect} from "@playwright/test"

