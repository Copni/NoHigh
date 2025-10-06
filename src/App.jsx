import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Arreter from "./pages/Arreter";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Signup from "./pages/Signup";
function App() {
    return (
        <>
            <Header />
            <main style={{ padding: "2rem", minHeight: "70vh" }}>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/arreter" element={<Arreter />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profil" element={<Profil />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
