import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>Accueil</Link>
                <Link to="/arreter" className={styles.link}>Arrêter l'addiction</Link>
                <Link to="/contact" className={styles.link}>Contact</Link>
            </nav>
        </header>
    );
}
