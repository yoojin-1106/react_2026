import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import loginJson from '../data/login.json'

const LOGIN_IMAGE = loginJson as string[];

function pickRandom(images : string[]) : string {
    const rand = Math.floor(Math.random() * images.length);
    /* 
        Math.random() : 0~1 (0,1)
        Math.floor() : 0~3 (0,1,2,3)
        images.length : 0~4(0,1,2,3,4)
    */
    return images[rand];
}

export default function Login(){
    const {login} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    //Login.tsx 페이지 오기전에 직전 페이지 주소가 있으면 그 주소 사용 아니면 루트(/)
    const from = (location.state as {from? : string} | null)?.from ?? '/';

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [submitting, setSubmitting] = useState(false); 
    const [heroImage] = useState(() => pickRandom(LOGIN_IMAGE)); 

    
    async function hanldeSubmit(e : React.SubmitEvent) {
        e.preventDefault();
        setSubmitting(true);
        try {
           await login(email, password);
           navigate(from, {replace : true}) 
        } catch (e) {

        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="stack">
           <div className="login-image">
                <img src={heroImage}/>
           </div>
           <div className="page-head">
                <h1>로그인</h1>
            </div>     
            <p className="muted">데모용 - 어떤 이메일/ 패스워드 로그인 가능</p>
            <form className="form" onSubmit={hanldeSubmit}>
                <div className="field">
                    <label htmlFor="email">이메일</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" id="email" name="email" value={email} required/>
                </div>
                <div className="field">
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" id="password" name="password" value={password} required/>
                </div>
                <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>{submitting ? '로그인중...' : '로그인'}</button>
            </form>
        </div>
    )
}