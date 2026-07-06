import { useState, useEffect } from "react";

function CartSummary({items, onRemove, onChage}){
    const totalPrice = items.reduce((sum, item) => {return sum + (Number(item.price) * Number(item.quantity))}, 0);
    //console.log(items);
    return(
            <div>
                <ul>
                    {items.map((item) => {
                        //console.log(item.id);
                        return(
                                <li className="cart-row" key={item.id}>
                                    <span className="name">{item.name} x {item.quantity}</span>
                                    <span className="subtotal">{Number(item.price) * Number(item.quantity)}</span>
                                    <button className="ghost" onClick={() => onChage(item.id, 1)}>+1</button>
                                    <button className="ghost" onClick={() => onChage(item.id, -1)}>-1</button>
                                    <button className="danger" onClick={() => onRemove(item.id)}>삭제</button>
                               
                                </li>                             
                        )
                    })}
                </ul>
                
                <div className="cart-total">
                    <span>총 결제 금액: </span>
                    <span className="total-price">{totalPrice.toLocaleString()}원</span>
                </div>
            </div>

    )
}

export default CartSummary;

