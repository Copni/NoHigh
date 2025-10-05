import React from "react";
import { Link } from "react-router-dom";
import styles from "./Accueil.module.css";

export default function Accueil() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Bienvenue sur NoHigh</h1>
                <p className={styles.subtitle}>
                    Informer, comprendre et agir face aux addictions.  
                    Ce site vous aide à trouver des informations fiables et un soutien adapté.
                </p>
                <div className={styles.actions}>
                    <Link to="/search" className={styles.buttonPrimary}>
                        🔍 Rechercher une substance
                    </Link>
                    <Link to="/arreter" className={styles.buttonSecondary}>
                        💪 Trouver de l’aide
                    </Link>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>🌿 Notre mission</h2>
                <p className={styles.text}>
                    NoHigh est une plateforme d’information et de prévention sur les
                    substances psychoactives.  
                    Nous mettons à disposition des outils fiables, simples et accessibles
                    pour mieux comprendre les effets, les risques, et les moyens d’agir.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>🧭 Les services proposés</h2>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h3>🔎 Recherche de substances</h3>
                        <p>Découvrez les effets, les risques et le prix moyen de nombreuses drogues.</p>
                        <Link to="/search" className={styles.link}>Explorer</Link>
                    </div>

                    <div className={styles.card}>
                        <h3>💬 Accompagnement à l’arrêt</h3>
                        <p>Accédez à des ressources et conseils pour vous aider à réduire ou arrêter.</p>
                        <Link to="/arreter" className={styles.link}>Découvrir</Link>
                    </div>

                    <div className={styles.card}>
                        <h3>📞 Contact et soutien</h3>
                        <p>Besoin d’aide ? Contactez-nous ou consultez les numéros d’écoute.</p>
                        <Link to="/contact" className={styles.link}>Contacter</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
