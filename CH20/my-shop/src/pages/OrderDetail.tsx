import { Link, useParams } from "react-router-dom";
import { useOrder } from "../hooks/useOrders";
import { formatPrice } from "../lib/format";
import Spinner from "../components/Spinner";
import EmptyState from "../components/EmptyState";


export default function OrderDetail(){
    
    const {id} = useParams<{id : string}>();
    console.log(id);
    const {order, loading, error} = useOrder(id ?? '');

    if(loading) return <Spinner/>;
    if(error) return;
    console.log(order);
    if(!order){
        return(
            <EmptyState message="주문 내역을 찾을 수 없습니다.">
                <Link to="/orders">주문 내역으로 가기</Link>
            </EmptyState>
        )
    }

    return(
        <div>
            <div className="stack">
               <div className="page-head">
                    <h1>주문번호 {order.id}</h1>
                    <p>{order.status}</p>
               </div>
               <p className="muted">{new Date(order.createdAt).toLocaleDateString('ko-KR')}</p>
              
               <section className="stack">
                    <h2>배송지</h2>
                    <p>{order.shipping.recipient}</p>
                    <p>{order.shipping.phone}</p>
                    <p>{order.shipping.zipcode}</p>
                    <p>{order.shipping.address}</p>
                    {order.shipping.memo &&
                         <p>{order.shipping.memo}</p>
                    }
               </section>
              
               <section className="stack">
                    <h2>주문항목</h2>
                    {order.items.map((item) => 
                        <div key={item.product.id}>
                            <span>{item.product.name} X {item.quantity}</span>
                            <span className="line-total">{formatPrice(item.product.price)}</span>
                        </div>
                    )}
               </section>

               <div className="summary">
                    <span className="total">{formatPrice(order.total)}</span>
               </div>
               <Link to="/orders">주문내역으로 돌아가기</Link>
            </div>
        </div>
    )
}