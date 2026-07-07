import { useContext, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext(null); //채널생성

export function ThemeProvider({children}){ 
    // Provider 
    // children :하위값 가져옴
    // App.jsx 에서 사용 <ThemeProvider/> <Layout/> <ThemeProvider/>이 들어온다.
    const [isDark, setIsDark] = useLocalStorage("ch15-dark-mode", false);
    // console.log(444);
    function toggleTheme(){
        setIsDark((prev) => !prev)
    }

    const value = {isDark, toggleTheme};

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    //값을 던짐
}

export function useTheme(){
    // 동작하는 방식 채널명 호출
    const context = useContext(ThemeContext);
    // console.log(555, ThemeContext);

    if(context === null){
        throw new Error(`useTheme는 <ThemeProvider안에서만 사용가능>`)
    }
    // console.log(context);
    return context;
}

export default ThemeContext;