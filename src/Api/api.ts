import axios, { type AxiosResponse }  from "axios";
import type { Envelope, Product } from "../Type/type";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",    
})
export const getProducts =async () => {
    const response = await instance.get<Product[]>("products");    
    return response;
}

export const getRegister = async (data: { email: string; password: string }) => {
    console.log(data);    
    const instance = axios.create({
        baseURL: "http://localhost:5092/api/user/",
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
