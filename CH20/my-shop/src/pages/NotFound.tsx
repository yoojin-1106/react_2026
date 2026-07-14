import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="state-box">
            <h2>404</h2>
            <p>페이지를 찾을 수 없습니다.</p>
            <Link to='/' className="btn btn-primary">홈으로</Link>
        </div>
    )
}