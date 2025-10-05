import React, { useState, useEffect } from "react";

const API_URL = "https://drugs-api-gbik.onrender.com";
const API_KEY = "ILoveDrugs";

export default function DrugSearch() {
    const [query, setQuery] = useState("");
    const [type, setType] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // --- Recherche automatique quand query ou type change ---
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
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">
                🔎 Recherche de substances (InfoDrogues API)
            </h1>

            <form
                onSubmit={handleSearch}
                className="flex flex-col sm:flex-row gap-3 mb-6"
            >
                <input
                    type="text"
                    placeholder="Rechercher une drogue..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 p-2 border rounded-lg shadow-sm"
                />
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="p-2 border rounded-lg shadow-sm"
                >
                    <option value="">Tous les types</option>
                    <option value="stimulant">Stimulant</option>
                    <option value="hallucinogène">Hallucinogène</option>
                    <option value="opioïde">Opioïde</option>
                    <option value="psychotrope">Psychotrope</option>
                    <option value="sédatif">Sédatif</option>
                </select>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Rechercher
                </button>
            </form>

            {loading && <p className="text-gray-600 text-center">Chargement...</p>}
            {error && <p className="text-red-600 text-center">{error}</p>}

            <div className="grid sm:grid-cols-2 gap-4">
                {results.map((drug) => (
                    <div
                        key={drug.id}
                        className="border rounded-xl p-4 shadow-md bg-white hover:shadow-lg transition"
                    >
                        <img
                            src={drug.poster}
                            alt={drug.nom}
                            className="w-full h-40 object-cover rounded-lg mb-3"
                        />
                        <h2 className="text-lg font-semibold">{drug.nom}</h2>
                        <p className="text-sm text-gray-500">{drug.type}</p>
                        <p className="text-sm mt-2">
                            <strong>Effet:</strong> {drug.effet}
                        </p>
                        <p className="text-sm">
                            <strong>Risque:</strong> {drug.risque}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            💰 <strong>{drug.prix}</strong>
                        </p>
                    </div>
                ))}
            </div>

            {!loading && !error && results.length === 0 && (
                <p className="text-center text-gray-500 mt-4">
                    Aucune substance trouvée.
                </p>
            )}
        </div>
    );
}
