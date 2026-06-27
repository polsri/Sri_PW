import {test,expect} from "@playwright/test"


let Auth_Token ={Authorization:"Bearer 7b88d71e36ee25a9fec3048b52d2a2a38cb9578d5516cd08c7b16f0ce52e94fd"};


test("Get Call",async({request}) =>
{

    // Specific user details "https://gorest.co.in/public/v2/users/850576"
    let response = await request.get("https://gorest.co.in/public/v2/users",{
        headers: Auth_Token
    });

    // Complete Respose
    //console.log(response)

    // JSON Body Respose
    let JsonBody = await response.json();
    console.log(JsonBody)

    // Status Code Respose(200)
    let statusCode = response.status();
    console.log(statusCode)

    // Status text Respose(ok)
    let statusText = response.statusText();
    console.log(statusText)
})


test("Create Call post",async({request}) =>
{
    // id: 8506127
    let userData=
    {
        name: "Srini",
        email: "Srini@test",
        gender: "Male",
        status: "active"
    }

    // Convert JavaScript to Json is serialization it will do Auto serialization
    let response = await request.post("https://gorest.co.in/public/v2/users",{
        headers: Auth_Token,
        data : userData
    });

    // Complete Respose
    //console.log(response)

    // JSON Body Respose
    let JsonBody = await response.json();
    console.log(JsonBody)

    // Status Code Respose(201)
    let statusCode = response.status();
    console.log(statusCode)

     // Status text Respose(Created)
    let statusText = response.statusText();
    console.log(statusText)
})

test("Put Call ",async({request}) =>
{
    // id: 8506127
    let userData=
    {
        name: "Srini",
        email: "Srinivas@test",
        gender: "Male",
        status: "Inactive"
    }

    // Convert JavaScript to Json is serialization it will do Auto serialization
    let response = await request.put("https://gorest.co.in/public/v2/users/8506127",{
        headers: Auth_Token,
        data : userData
    });

    // Complete Respose
    //console.log(response)

    // JSON Body Respose
    let JsonBody = await response.json();
    console.log(JsonBody)

    // Status Code Respose(200)
    let statusCode = response.status();
    console.log(statusCode)

     // Status text Respose(ok)
    let statusText = response.statusText();
    console.log(statusText)
})

test("Delete",async({request}) =>
{

    // Convert JavaScript to Json is serialization it will do Auto serialization
    let response = await request.delete("https://gorest.co.in/public/v2/users/8505768",{
        headers: Auth_Token,
    });


    // Status Code Respose(204)
    let statusCode = response.status();
    console.log(statusCode)

     // Status text Respose(No Content)
    let statusText = response.statusText();
    console.log(statusText)
})