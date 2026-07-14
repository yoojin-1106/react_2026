import type { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductGridProps{
    products : Product[]
}

export default function ProductGrid({products} : ProductGridProps){
    if(products.length === 0) return <p className="muted">상품이 없습니다.</p>

    return(
        <div className="product-grid">
            {
                products.map((p) => 
                    <ProductCard key={p.id} product={p}/>
                )
            }
        </div>
    )
}