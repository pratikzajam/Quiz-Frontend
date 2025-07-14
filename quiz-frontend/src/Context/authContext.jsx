import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export let AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (token) => {
        setUser(token);

        const decoded = jwtDecode(token);
        localStorage.setItem("user", decoded);

        if (decoded) {
            return true
        } else {
            return false
        }
    }

    const logout = () => {
        setUser(null);
    }


    return < AuthContext.Provider value={{ login, logout }}>
        {children}
    </AuthContext.Provider>

}

