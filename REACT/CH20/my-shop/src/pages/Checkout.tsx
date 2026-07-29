import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { createOrder } from "../lib/api/orders";
import type { ShippingInfo } from "../types";
import { formatPrice } from "../lib/format";
import EmptyState from "../components/EmptyState";


export default function Checkout(){
    //console.log(`Checkout 1`);
    const {items, totalPrice, clear} = useCart();
    const navigate = useNavigate();
    const [ form, setForm] = useState<ShippingInfo>({
                                                      recipient :''
                                                    , phone :''
                                                    , zipcode :''
                                                    , address :''
                                                    , memo :''
                                                });
    
    const [error, setError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);
                                               
    if(items.length === 0){
        //console.log(`Checkout 2`);
        return(
            <EmptyState message="장바구니가 비어있어 결제할 수 없어요">
                <Link to="/">홈으로가서 쇼핑하기</Link>
            </EmptyState>
        )   

    }
    //console.log(`Checkout 3`);
    const handleSumit = async (e : React.SubmitEvent) => {
        e.preventDefault();
        setError(null);
        setSubmitting(true);
        try {
            const order = await createOrder({items, shipping : form, total : totalPrice});
            clear(); // 결제후 장바구니 비우기
            navigate(`/order` + order.id);
            //자바스크립트 안에서 해당 주소로 page를 옮겨주는 역활을 한다.      
        } catch (e) {
            setError(`주문 처리 중 문제가 발생했어요.`);
        }finally{
            setSubmitting(false);
        }
    }
    //console.log(`Checkout 4`);
    return(
        <div className="stack">
            <div className="page-head">
                <h1>결제 하기</h1>
            </div>
            <form onSubmit={handleSumit} className="form">
                <div className="field">
                    <label htmlFor="recipient">받는분</label>
                    <input type="text" id="recipient" name="recipient" value={form.recipient} onChange={(e) => setForm((prev) => ({...prev, recipient : e.target.value}))}/>
                </div>
                <div className="field">
                    <label htmlFor="phone">휴대폰번호</label>
                    <input type="text" id="phone" name="phone" value={form.phone} onChange={(e) => setForm((prev) => ({...prev, phone : e.target.value}))}/>
                </div>
                <div className="field">
                    <label htmlFor="zipcode">우편번호</label>
                    <input type="text" id="zipcode" name="zipcode" value={form.zipcode} onChange={(e) => setForm((prev) => ({...prev, zipcode : e.target.value}))}/>
                </div>
                <div className="field">
                    <label htmlFor="address">주소</label>
                    <input type="text" id="address" name="address" value={form.address} onChange={(e) => setForm((prev) => ({...prev, address : e.target.value}))}/>
                </div>
                <div className="field">
                    <label htmlFor="memo">배송메모</label>
                    <textarea id="memo" name="memo" value={form.memo ?? ''} onChange={(e) => setForm((prev) => ({...prev, memo : e.target.value}))}></textarea>
                </div>
                
                <div className="summary">
                    <span className="total">{formatPrice(totalPrice)}</span>
                </div>

                {error && 
                    <p className="error-box">{error}</p>
                }
                <button type="submit" className="btn btn-primary btn-block" disabled={submitting} >{submitting ? '처리중...' : `${formatPrice(totalPrice)} 결제하기`}</button>
            </form>
        </div>
    )                                                


}