import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import styles from "./Profil.module.css";
import { Link } from "react-router-dom";


export default function Profil() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>👤 Mon Profil</h1>
            <p className={styles.text}>
                Bienvenue sur votre espace personnel.  
                Vous êtes connecté à NoHigh.
            </p>
        </div>
    );
}
