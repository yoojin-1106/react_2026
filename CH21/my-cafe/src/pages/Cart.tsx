import CartItemRow from "../components/CartItemRow";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../lib/format";



interface CartProps{
    onClose: () => void;
}

export default function Cart({ onClose} : CartProps){
    const {items, totalPrice} = useCart();

    return(
        <div>
            <div className="quantity-control">
                {items.map((it) => 
                    <CartItemRow item={it} onClose={onClose}/>
                ) }
            </div>
            <div className="cart-footer">
                <div className="total-price-row">
                    <span>합계</span>
                    <span className="total-price">{formatPrice(totalPrice)}</span>                  
                </div>
                <Link to='/checkout' className="payment-button">결제하기</Link>               
            </div>
        </div>

    )
}