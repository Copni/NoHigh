import React, { useState, useEffect } from "react";
import styles from "./DrugSearch.module.css"; 

const API_URL = "https://drugs-api-gbik.onrender.com";
const API_KEY = "ILoveDrugs";

export default function DrugSearch() {
    const [query, setQuery] = useState("");
    const [type, setType] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (query.trim() || type.trim()) {
            fetchDrugs();
        } else {
            setResults([]);
        }
    }, [query, type]);

    const fetchDrugs = async () => {
        try {
            setLoading(true);
            setError("");
            const params = new URLSearchParams();
            if (query) params.append("s", query);
            if (type) params.append("type", type);

            const response = await fetch(`${API_URL}/drug?${params.toString()}`, {
                headers: { Authorization: `Bearer ${API_KEY}` },
            });

            if (!response.ok) throw new Error("Erreur API");
            const data = await response.json();

            setResults(data.Search || []);
        } catch (err) {
            setError("Impossible de récupérer les données.");
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchDrugs();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>🔎 Recherche de substances</h1>

            {/* --- Formulaire de recherche --- */}
            <form onSubmit={handleSearch} className={styles.form}>
                <input
                    type="text"
                    placeholder="Rechercher une drogue..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.input}
                />
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={styles.select}
                >
                    <option value="">Tous les types</option>
                    <option value="stimulant">Stimulant</option>
                    <option value="hallucinogène">Hallucinogène</option>
                    <option value="opioïde">Opioïde</option>
                    <option value="psychotrope">Psychotrope</option>
                    <option value="sédatif">Sédatif</option>
                </select>
                <button type="submit" className={styles.button}>
                    Rechercher
                </button>
            </form>

            {/* --- États : chargement, erreur, résultats --- */}
            {loading && <p className={styles.message}>Chargement...</p>}
            {error && <p className={`${styles.message} ${styles.error}`}>{error}</p>}

            <div className={styles.results}>
                {results.map((drug) => (
                    <div key={drug.id} className={styles.card}>
                        <img src={drug.poster} alt={drug.nom} className={styles.image} />
                        <h2 className={styles.name}>{drug.nom}</h2>
                        <p className={styles.type}>{drug.type}</p>
                        <p className={styles.detail}>
                            <strong>Effet :</strong> {drug.effet}
                        </p>
                        <p className={styles.detail}>
                            <strong>Risque :</strong> {drug.risque}
                        </p>
                        <p className={styles.detail}>
                            💰 <strong>{drug.prix}</strong>
                        </p>
                    </div>
                ))}
            </div>

            {!loading && !error && results.length === 0 && (
                <p className={styles.message}>Aucune substance trouvée.</p>
            )}
        </div>
    );
}
