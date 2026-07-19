import { createContext, useState, type ReactNode } from "react";
import type { User } from "../types/user";
import { clearToken, setToken } from "../lib/auth/token";
import { delay } from "../lib/api/client";

const USER_KEY = 'shop-user';

function readUser() : User | null {
    try {
        const raw = localStorage.getItem(USER_KEY);
        return raw ? JSON.parse(raw) as User : null;
    } catch (e) {
        return null;
    } 
}

export interface AuthContextValue{
    user : User | null;
    login : (id : string, password : string) => Promise<void>;
    logout : () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({children} : {children : ReactNode}){
    const [user, setUser] = useState<User | null>(() => readUser());
    const value : AuthContextValue = {
          user
        , login : async (id, password) => {
            (await delay(400));
            setToken('mock-jwt-token');
            const next : User = {id, nickname : '곡고고고 고객님'};
            setUser(next);
        }
        , logout : () => {
            clearToken();
            localStorage.removeItem(USER_KEY);
            setUser(null);
        }
    };
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
 
}
