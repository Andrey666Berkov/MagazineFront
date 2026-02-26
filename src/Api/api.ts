import axios, { type AxiosResponse }  from "axios";
import type { Envelope, Product } from "../Type/type";

const instance = axios.create({
    baseURL: "http://localhost:8080/api-product/",    
})
export const getProducts =async ()  => {
    const response = await instance.get<Envelope<Product[]>>("products");    
    return response.data;
}

export const getRegister = async (data: { email: string; password: string }) => {
    console.log(data);    
    const instance = axios.create({
        baseURL: "http://prod_backend:8080/api/user/",
    });
    const response = await instance.post<AxiosResponse<Envelope<{}>>>("registration", data);
    console.log(response);
    (response);
    if (response.status !== 200) {
        throw new Error("Registration failed");
    }
    return response;
}
 
export const getLoginTo = async (data: { email: string; password: string }) => {
    console.log(data);    
    const instance = axios.create({
        baseURL: "http://localhost:5092/api/user/",
    });
    const response = await instance.post<AxiosResponse<Envelope<{}>>>("login", data);
    console.log(response);
    (response);
    if (response.status !== 200) {
        throw new Error("Login failed");
    }
    return response;
 }


