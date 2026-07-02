import { useState, useEffect } from "react";

function UserList(){
   
    const [users, setUsers] = useState([]);
    // async/await
    const loadUsers = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
            console.log(res);

            if(!res.ok){
                throw new Error(`서버 응답 오류 : ${res.status}`);
            }

            const data = await res.json();
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    /* 
        첫번째인자 : 화면 랜더링 끝난 뒤 실행할 코드
        두번째 인자 :  언제 다시 실행할 지 결정하는 의존성 값들 배열
        두번째 인자 [] 에 빈배열이 들어가면 화면이 랜더링 될때 한번만(1회) 실행.
                    배열에는 인자가 들어감
                    만약 배열에는 인자가 들어가면 해당 인자가 변경되면 useEffect이 실행되서 화면이 새롭게 랜더링 됨.
        
        * useEffect는 화면 랜더링과 직접적인 관련이 없는 부수효과를 React에서 사용할때, 부수효과는 
        1. 서버에서 데이터 가지고 오기
        2. 타이머 구독등록
        3. 브라우저에 있는 localStorage, sessionStorage
        4. 이 컴포넌트가 사라질때 (클린업이 필요할때)
    */
    useEffect(() => { ` `
        loadUsers();
    }, [])

    return(
        <>
            <div className="demo">
                <p className="hint">서버에서 받아온 사용자</p>
                <ul className="user-list">
                    {
                        users.map((users) =>
                            <li key={users.id}>
                                <div className="name">{users.name}</div>
                                <div className="email">{users.email}</div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default UserList;