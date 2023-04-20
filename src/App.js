import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MakeReservation from "./components/layout/MakeReservation";
import HomePage from "./components/pages/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./components/pages/menu/MenuPage";
import ContactPage from "./components/pages/contact/ContactPage";
import AboutPage from "./components/pages/about/AboutPage";
import MenuOverlay from "./components/layout/MenuOverlay";
import { useState } from "react";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  let reservationElement = document.querySelector("#reservation");

  navbarOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="App">
      <Header
        reservationElement={reservationElement}
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <MakeReservation />
      <Footer />
    </div>
  );
}

export default App;
