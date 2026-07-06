import { useContext, createContext } from "react";
import useLocalStotage from "../hooks/useLocalStotage";

const ThemeContext = createContext(null);

export function ThemeProvider({children}){
    const [isDark, setIsDark] = useLocalStotage("ch15-dark-mode", false)

    function toggleTheme(){
        setIsDark((prev) => !prev)
    }

    const value = {isDark, toggleTheme}

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(){
    const context = useContext(ThemeContext);

    if(context === null){
        throw new Error(`useTheme는 <ThemeProvider안에서만 사용가능>`)
    }
    return context;
}

export default ThemeContext;