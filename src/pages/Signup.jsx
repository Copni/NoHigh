import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Signup.module.css";

export default function Signup() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation basique
        if (formData.password !== formData.confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        // Simule un enregistrement local (API plus tard)
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const alreadyExists = users.some((u) => u.email === formData.email);

        if (alreadyExists) {
            setError("Un compte avec cet email existe déjà.");
            return;
        }

        const newUser = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        };

        localStorage.setItem("users", JSON.stringify([...users, newUser]));

        // Connexion automatique
        login("fakeToken_" + Date.now());
        navigate("/profil");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>🧾 Créer un compte</h1>

            {error && <p className={styles.error}>{error}</p>}

            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nom complet"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Adresse email"
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
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmer le mot de passe"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />

                <button type="submit" className={styles.button}>
                    Créer un compte
                </button>
            </form>

            <p className={styles.footerText}>
                Déjà inscrit ?{" "}
                <Link to="/login" className={styles.link}>
                    Se connecter
                </Link>
            </p>
        </div>
    );
}
