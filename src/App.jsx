import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Arreter from "./pages/Arreter";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Footer from "./components/Footer";
function App() {
    return (
        <>
        <Header />
            <main style={{ padding: "2rem" }}>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/arreter" element={<Arreter />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </main>
        <Footer />
        </>
    
    );
}

export default App;

