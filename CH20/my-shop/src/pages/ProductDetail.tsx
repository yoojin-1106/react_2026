import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { CATEGORY_LABELS } from "../types";
import { formatPrice } from "../lib/format";
import { useCart } from "../hooks/useCart";

export default function ProductDetail(){
    const {id} = useParams<{id : string}>();
    const product = PRODUCTS.find((p) => p.id === id);
    const soldOut = product?.stock === 0;
    const {addItem} = useCart();
    //console.log(soldOut);

    if(!product){
        return(
            <div className="stack">
                <p>상품을 찾을 수 없습니다.</p>    
                <Link to='/'>목록으로 이동</Link>
            </div>
        )
    }

    return(
        <div className="stack">
            <Link to="/">목록으로 이동</Link>
            <div className="detail">
                <div className="media">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="info">
                    <span className="p-cat">{CATEGORY_LABELS[product.category]}</span>
                    <h1>{product.name}</h1>
                    <span className="p-rating">{"* " + product.rating}</span>
                    <span className="detail-price">{formatPrice(product.price)}</span>
                    <p>{product.description}</p>
                    {soldOut ? 
                    (
                        <span className="soldout">품절</span>
                    )
                    :
                    (
                        <button type="button" className="btn btn-primary" onClick={() => addItem(product)} >담기</button>
                    )
                    }
                </div>
            </div>
        </div>
    )
}
