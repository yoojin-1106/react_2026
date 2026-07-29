import { useParams, Link, useNavigation, useNavigate } from "react-router-dom";
import { findProductById } from "../data/products";

// http://localhost:5173/products/1

export default function ProductDetail(){
    console.log("ProductDetail :", useParams());
    const {id} = useParams();
    const navigate = useNavigate();

    const product = findProductById(id);
    if(!product){
        return (
            <div>
                <h1>상품을 찾을 수 없습니다.</h1>
                <p className="muted">id가 {id}인 상품이 없습니다.</p>
                <Link to="/products">상품목록으로 이동</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p className="price">{product.price}</p>
            <p className="muted">{product.category}</p>
            <p>{product.desc}</p>
            <br></br>
            <button type="button"  onClick={() => navigate(-1)}>뒤로가기</button>
            <button type="button" className="primary" onClick={() => navigate("/products")}>상품목록으로 이동</button>
        </div>
    )
}