import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div className="container center">
            <h1>페이지를 찾을 수 없습니다.</h1>
            <p className="muted">없는 페이지 입니다. (404)</p>
            <Link className="primary-link" to='/'>홈으로 돌아가기</Link>
        </div>
    )
}