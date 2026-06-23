import {test,expect} from "@playwright/test"
import console from "node:console";
import { request } from "node:http";
//import process from "node:process";


let oauthConfig =
{
    tokenURL: 'https://test.api.amadeus.com/v1/security/oauth2/token',
    clientId: process.env.OAUTH_CLIENT_ID!,
    clientSecret: process.env.OAUTH_CLIENT_SECRET!,
    grantType: process.env.GRANT_TYPE!

}

let token:string;

test.beforeEach("Post generate token", async({request}) =>
{
    let response = await request.post(oauthConfig.tokenURL,
                    {
                        form:
                        {
                            grant_type:oauthConfig.grantType,
                            client_id: oauthConfig.clientId,
                            client_secret: oauthConfig.clientSecret
                        }

                    })

    let JsonBody =await response.json();
    console.log(JsonBody);
    token= JsonBody.access_token;
    expect(response.status()).toBe(200);
    console.log(token)
})


test("Get the details",async({request}) =>
{
    let baseURL = "https://test.api.amadeus.com";
    let endPointURL = "/v1/reference-data/locations?";

    let queryParam=
    {
        subType:"CITY,AIRPORT",
        keyword:"MUC",
        countryCode:"DE"
    }
    let locationResponse = await   request.get(`${baseURL}${endPointURL}`,
                {
                    headers:
                    {
                        Authorization :`Bearer ${token}`
                    },
                 params :  queryParam 
                });
    let out  = (await locationResponse).json();       
    
    console.log(out);
    
})
