import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 NoHigh. Tous droits réservés.</p>
        </footer>
    );
}