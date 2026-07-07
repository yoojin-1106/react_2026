import { Link } from "react-router-dom"

export default function Home(){
    return (
        <div>
            <h1>홈</h1>
            <p>React-Router로 만든 작은 쇼핑몰 예제 입니다.</p>
            <p>바로가기 : <Link to = "/contact">연락처 바로가기</Link></p>
        </div>
    )
}