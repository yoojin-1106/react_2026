import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login(){
    const {login} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = (location.state as {from? : string} | null)?.from ?? '/';

    const [id, setId] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [submitting, setSubmitting] = useState(false); 

    
    async function hanldeSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        setSubmitting(true);
        try {
            await login(id, password);
            navigate(from, { replace: true });

        } catch (e) {
            console.error(e);

        } finally {
            setSubmitting(false);

        }
    }


    return (
        <div className="stack">
           <div className="page-head">
                <h1>로그인</h1>
            </div>     
            <p className="muted"></p>
            <form className="form" onSubmit={hanldeSubmit}>
                <div className="field">
                    <label htmlFor="id">아이디</label>
                    <input type="text" onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력해 주세요." id="id" name="id" value={id} required/>
                </div>
                <div className="field">
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력해 주세요" id="password" name="password" value={password} required/>
                </div>
                <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>{submitting ? '로그인중...' : '로그인'}</button>
            </form>
        </div>
    )
}