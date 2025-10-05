import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Arreter from "./pages/Arreter";
import Contact from "./pages/Contact";
import DrugSearch from "./components/DrugSearch.jsx";

function App() {
    return (
        <>
            <main style={{ padding: "2rem" }}>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/arreter" element={<Arreter />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Header />
            <DrugSearch></DrugSearch>
        </>
    );
}

export default App;
