import { UserProvider, useUser } from "../context/UserContext";

function UserHeader(){
    const {userName, setUserName} = useUser();

    return (
        <div className="demo">
            <p className="welcome">환영합니다.<strong>{userName}</strong></p>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="이름을 입력하세요." />
        </div>
    )
}

export default UserHeader;