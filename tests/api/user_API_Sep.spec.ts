import {test,expect} from "../../src/fixtures/apifixtures"
import { apiHelper } from "../../src/utils/apihelper";

const token = "7b88d71e36ee25a9fec3048b52d2a2a38cb9578d5516cd08c7b16f0ce52e94fd";
let Auth_Token ={Authorization: `Bearer ${token}` };


test("Get Data Separated", async({apihelper}) =>
{
    let response = await apihelper.get('/public/v2/users',Auth_Token);

    expect( response.status).toBe(200);

    let JSONbody = await response.body;
    console.log(JSONbody);

})
