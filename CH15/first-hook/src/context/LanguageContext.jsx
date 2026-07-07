import { useState, useEffect } from "react";


const LanguageContext = createContext(null); //채널을 만듬


export function LanguageProvider({children}){
    const [isDark, setIsDark] = useLocalStotage("ch15-dark-mode", false)


    const value = {isDark, toggleTheme}

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
