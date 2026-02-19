import axios  from "axios";
import type { Product } from "../Type/type";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",    
})

export const getProducts =async () => {
    const response = await instance.get<Product[]>("products");    
    return response;
}
