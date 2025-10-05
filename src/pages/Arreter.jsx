import React from "react";
import styles from "./Arreter.module.css";

export default function Arreter() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>💪 Arrêter une addiction</h1>
            <p className={styles.intro}>
                Décider d’arrêter une consommation est un pas courageux et souvent difficile.
                Vous n’êtes pas seul·e : de nombreuses structures et professionnels peuvent
                vous accompagner, en toute confidentialité.
            </p>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>🧭 Étapes pour amorcer le changement</h2>
                <ul className={styles.list}>
                    <li><strong>1.</strong> Reconnaître la dépendance et accepter d’en parler.</li>
                    <li><strong>2.</strong> Identifier les situations ou émotions déclencheuses.</li>
                    <li><strong>3.</strong> Chercher du soutien : proches, médecin, groupe de parole.</li>
                    <li><strong>4.</strong> Se fixer des petits objectifs progressifs.</li>
                    <li><strong>5.</strong> Se faire accompagner par un professionnel si besoin.</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>🌿 Ressources d’aide et accompagnement</h2>
                <div className={styles.resources}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Drogues Info Service</h3>
                        <p>
                            Service gratuit et anonyme pour toute question sur les drogues ou
                            l’addiction.  
                            <a
                                href="https://www.drogues-info-service.fr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                www.drogues-info-service.fr
                            </a>
                        </p>
                        <p>📞 0 800 23 13 13</p>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Alcool Info Service</h3>
                        <p>
                            Pour obtenir de l’aide ou parler de votre consommation d’alcool.  
                            <a
                                href="https://www.alcool-info-service.fr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                www.alcool-info-service.fr
                            </a>
                        </p>
                        <p>📞 0 980 980 930</p>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Consultations jeunes consommateurs</h3>
                        <p>
                            Dispositif gratuit et confidentiel pour les jeunes et leur entourage.  
                            <a
                                href="https://www.sante.gouv.fr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                En savoir plus
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>🧘 Conseils pour tenir dans la durée</h2>
                <ul className={styles.tips}>
                    <li>Entourez-vous de personnes bienveillantes.</li>
                    <li>Occupez votre esprit : sport, musique, activités créatives.</li>
                    <li>Apprenez à reconnaître les rechutes comme une étape du parcours.</li>
                    <li>Félicitez-vous à chaque progrès, même petit.</li>
                </ul>
            </section>
        </div>
    );
}
