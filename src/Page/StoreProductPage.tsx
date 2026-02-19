import { useEffect, useState } from "react"
import { getProducts } from "../Api/api"
import type { Product } from "../Type/type";
import Cart from "../Component/Cart";

const StoreProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
       async function fetchProducts() {
            const product = await getProducts();
            setProducts(product.data);
        }
        fetchProducts();
    }, [])

    return (        
        <div className="flex flex-wrap gap-4 justify-center my-3">
            {products.map((product) => (
                <Cart key={product.id} product={product} /> 
            ))}
        </div>
    )
 }

export default StoreProductPage