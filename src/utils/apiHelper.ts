import { APIRequestContext } from "@playwright/test";


export class apiHelper
{
    private readonly baseURL:string;
    private readonly request:APIRequestContext


    constructor(request:APIRequestContext,baseURL:string)
    {
        this.baseURL = baseURL;
        this.request = request;

    }

    async get(endPoint:string,headers?:Record<string,string>)
    {
        let response = await this.request.get(`${this.baseURL}${endPoint}`,
            {
                headers:headers
            });

    return{
       status: response.status(),
       body : response.json()
    }
     
    }

    async post(endPoint:string,data:object,headers?:Record<string,string>)
    {
        let response = await this.request.post(`${this.baseURL}${endPoint}`,
            {
                headers:headers,
                data: data
            });

    return{
       status: response.status(),
       body : response.json()
    }
     
    }

    async put(endPoint:string,data:object,headers?:Record<string,string>)
    {
        let response = await this.request.put(`${this.baseURL}${endPoint}`,
            {
                data: data,
                headers:headers
            });

    return{
       status: response.status(),
       body : response.json()
    }
     
    }

    async delete(endPoint:string,headers?:Record<string,string>)
    {
        let response = await this.request.delete(`${this.baseURL}${endPoint}`,
            {
                headers:headers
            });

    return{
       status: response.status()
        }
     
    }

}