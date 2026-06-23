import { beforeEach } from "node:test";
import {test,expect} from "../src/fixtures/Page"
import { CsvHelper } from "../src/utils/CsvHelper";
 

test.beforeEach( async({registerAccountPage}) =>
{

    await registerAccountPage.gotoLoginPage();
})

let data = CsvHelper.readCSV("src/data/registerdata.csv")

for(let va of data)
{

    test("enter personal Details", async  ({registerAccountPage})=>
{
    await registerAccountPage.enterPersonalDetails(va.firstName!,va.lastName!,va.email!,va.telephone!);

})
}
