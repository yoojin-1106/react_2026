import CartItemRow from "../components/CartItemRow";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../lib/format";


export default function Cart(){
    const {items, totalPrice, clear} = useCart();

    if(items.length === 0){
        return (
            <div className="container">
                <p>장바구니가 비어있습니다.</p>
                <Link to="/" className="btn btn-primary">쇼핑하러 가기</Link>
            </div>
        )
    }

    return(
        <div>
            <div className="">
            <h1>장바구니</h1>
            </div>
            <div className="">
                {items.map((it) => 
                    <CartItemRow key={it.product.id} item={it}/>
                )
                }
            </div>
            <div className="cart-footer">
                <div className="total-price-row">
                    <span>합계</span>
                    <span className="total-price">{formatPrice(totalPrice)}</span>
                    <span className="total-price">총{items.length}건</span>
                </div>
                <Link to='/checkout' className="btn payment-button btn-block">결제하기</Link>
                <button type="button" className="payment-button" onClick={() => clear()}></button>
            </div>
        </div>

    )
}