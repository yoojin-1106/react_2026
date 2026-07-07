import { createContext, useContext, useState } from "react";

const GreetingContext = createContext(null);
//채널 생성

export function GreetingProvider({children}){
    const [greeting, setGreeting] = useState("안녕하세요");
    const value = {greeting, setGreeting};

    return <GreetingContext.Provider value = {value}>{children}</GreetingContext.Provider>
}

export function useGreeting(){
    const context = useContext(GreetingContext)

    if(context === null){
        throw new Error(`GreetingContext.Provider 안에 있어야 합니다`);
    }
    return context;
    
}

export default GreetingContext;