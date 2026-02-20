import type { Product } from "../Type/type"

const Cart = ({ product }: {product:Product}) => {
    
    return (
        <div className="bg-orange-300 w-60 h-100 rounded-2xl shadow-2xl">
            <img src={product.image }
                alt="Cart Icon" className="w-1/2 h-1/3 m-2" />
            <div className="flex flex-col items-start justify-start p-2">
                <h1 className="text-lg font-bold">{product.title}</h1>
                <p>Price: <span className="font-bold font-serif">{product.price}</span> р</p>
                <p>{product.category}</p>
            </div>
        </div>
    )
}

export default Cart