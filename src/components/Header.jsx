import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/"); 
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/" className={styles.brand}>SoHigh</Link>
            </div>

            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>Accueil</Link>
                <Link to="/arreter" className={styles.link}>Arrêter</Link>
                <Link to="/search" className={styles.link}>Recherche</Link>
                <Link to="/contact" className={styles.link}>Contact</Link>
                {isAuthenticated && (
                    <Link to="/profil" className={styles.link}>Profil</Link>
                )}
            </nav>

            <div className={styles.auth}>
                {isAuthenticated ? (
                    <button onClick={handleLogout} className={styles.authButton}>
                        Se déconnecter
                    </button>
                ) : (
                    <Link to="/login" className={styles.authButton}>
                        Se connecter
                    </Link>
                )}
            </div>
        </header>
    );
}
