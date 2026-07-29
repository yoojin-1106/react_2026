import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Product(){
     
    return (
        <div>
            <ul>상품목록</ul>
            <p>상세화면으로 넘어갑니다.</p>

            {products.map((p) => 
                <Link className="card" to={`/products/${p.id}`} key={p.id}>
                    <h3>{p.name}</h3>
                    <div className="price">{p.price}원</div>
                    <div className="muted">{p.category}</div>
                </Link> 
            )}
        </div>
    )

}
