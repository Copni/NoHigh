import { createContext, useContext, useState, useEffect } from "react";

// --- Création du contexte ---
const AuthContext = createContext();

// --- Hook pour l'utiliser facilement ---
export function useAuth() {
    return useContext(AuthContext);
}

// --- Provider global ---
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Vérifie si un token est déjà stocké
        const token = localStorage.getItem("authToken");
        if (token) setIsAuthenticated(true);
    }, []);

    const login = (token) => {
        localStorage.setItem("authToken", token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
