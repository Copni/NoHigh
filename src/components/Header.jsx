import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleAuthToggle = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/" className={styles.brand}>NoHigh</Link>
            </div>

            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>Accueil</Link>
                <Link to="/arreter" className={styles.link}>Arrêter</Link>
                <Link to="/search" className={styles.link}>Recherche</Link>
                <Link to="/contact" className={styles.link}>Contact</Link>
            </nav>

            <div className={styles.auth}>
                <button onClick={handleAuthToggle} className={styles.authButton}>
                    {isLoggedIn ? "Se déconnecter" : "Se connecter"}
                </button>
            </div>
        </header>
    );
}
