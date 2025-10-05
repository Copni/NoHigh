import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message envoyé :", formData);
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>📩 Contact & Aide</h1>
            <p className={styles.intro}>
                Une question ? Un besoin d’aide ?  
                Remplissez le formulaire ci-dessous ou consultez les ressources de soutien.
            </p>

            {sent && (
                <p className={styles.success}>
                    ✅ Votre message a bien été envoyé. Merci pour votre confiance !
                </p>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    required
                ></textarea>
                <button type="submit" className={styles.button}>
                    Envoyer le message
                </button>
            </form>

            <section className={styles.resources}>
                <h2 className={styles.subtitle}>📞 Ressources d’aide disponibles</h2>
                <ul className={styles.list}>
                    <li>
                        <strong>Drogues Info Service :</strong> 0 800 23 13 13 —  
                        <a
                            href="https://www.drogues-info-service.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            www.drogues-info-service.fr
                        </a>
                    </li>
                    <li>
                        <strong>Alcool Info Service :</strong> 0 980 980 930 —  
                        <a
                            href="https://www.alcool-info-service.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            www.alcool-info-service.fr
                        </a>
                    </li>
                    <li>
                        <strong>Écoute Cannabis :</strong> 0 980 980 940
                    </li>
                </ul>
            </section>
        </div>
    );
}
