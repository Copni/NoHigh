import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 🔍 Vérifie si l'utilisateur existe dans localStorage
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(
            (u) => u.email === formData.email && u.password === formData.password
        );

        if (user) {
            login("fakeToken_" + Date.now());
            navigate("/profil");
        } else {
            setError("Identifiants incorrects. Vérifiez votre email ou mot de passe.");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>🔐 Connexion</h1>

            {error && <p className={styles.error}>{error}</p>}

            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Se connecter
                </button>
            </form>

            <p className={styles.footerText}>
                Pas encore de compte ?{" "}
                <Link to="/signup" className={styles.link}>
                    Créer un compte
                </Link>
            </p>
        </div>
    );
}
