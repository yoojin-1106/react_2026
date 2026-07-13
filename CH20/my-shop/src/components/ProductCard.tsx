import type { Product } from "../types";
import { CATEGORY_LABELS } from "../types";
import { formatPrice } from "../lib/format";

interface ProductCardProps{
    product : Product
}

export default function ProductCard({product} : ProductCardProps)  {
    const soldOut = product.stock === 0;

    return (
        <div>
            <img className="thumb" src={product.image} alt={product.name}/>
            <div className="body">
                <span className="p-cat">{CATEGORY_LABELS[product.category]}</span>
                <p className="p-name">{product.name}</p>
                <p className="p-rating">{'* ' + product.rating}</p>
                {
                   soldOut ? 
                   (
                        <span className="soldout">품절</span>
                   )
                   :
                   (
                       <span className="p-price">{formatPrice(product.price)}</span>
                   ) 
                }
            </div>
        </div>
    )
}