import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="menu-section">
            <img src="/images/error.png" alt="error" className="error-image"/>
            <Link to='/' className="btn btn-primary">홈으로 →</Link>
        </div>
    )
}