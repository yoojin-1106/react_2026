import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);
//초기값은 null, context 채널 생성

export function UserProvider({children}){
    const [userName, setUserName] = useState("수진");
    const value = {userName, setUserName};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

export function useUser(){
    const context = useContext(UserContext);

    if(context === null){
        throw new Error(`useUser는 <UserContext.Provider>내에서만 사용`);
    }
    return context;
}

export default UserContext;