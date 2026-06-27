import {test,expect} from "../../src/fixtures/apifixtures"

const token = "7b88d71e36ee25a9fec3048b52d2a2a38cb9578d5516cd08c7b16f0ce52e94fd";
let Auth_Token ={Authorization: `Bearer ${token}` };
let userId:number;

// Post-Get-Put-Get-Delete-Get
test("End to end test", async({apihelper})=>
{

    // User details
    let data=
    {
        name:'SrTe',
        email:`tes${Date.now()}@mail.com`,
        gender:'Female',
        status:"active"
    }
    // Post the request
   let response = await apihelper.post("/public/v2/users",data,Auth_Token);
    expect(response.status).toBe(201);
   let JSONBody= await response.body;
   console.log(JSONBody)
   userId = JSONBody.id;
   console.log(userId)

   // Get the request
   let getResponse = await apihelper.get(`/public/v2/users/${userId}`,Auth_Token)
   expect(getResponse.status).toBe(200);

   // PUT the response
   let putData=
   {
    status:'inactive'
   }
   let putResponse = await apihelper.put(`/public/v2/users/${userId}`,putData,Auth_Token)
   expect(putResponse.status).toBe(200);
   let putBody = await putResponse.body;
    let expectedValue = putBody.status;
    expect(expectedValue).toBe(putData.status)

    // Delete the request
   let deleteResponse = await apihelper.delete(`/public/v2/users/${userId}`,Auth_Token)
   expect(deleteResponse.status).toBe(204);


    // Get the request
   let getResponseAfterDelete = await apihelper.get(`/public/v2/users/${userId}`,Auth_Token)
   expect(getResponseAfterDelete.status).toBe(404);

   let JOSN= await getResponseAfterDelete.body;
   console.log(JOSN)

}

)