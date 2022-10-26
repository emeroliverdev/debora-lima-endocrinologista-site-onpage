import React from "react";
import Header from "./componentes/header";
import NavBar from "./componentes/navBar";
import ProfileSection from "./componentes/profileSection";
import ReviewsSection from "./componentes/reviewsSection";
import TreatmentsSection from "./componentes/treatmentsSection";
import ContactSecion from "./componentes/contatcSection";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <ProfileSection />
        <ReviewsSection />
        <TreatmentsSection />
        <ContactSecion />
      </main>
    </>
  );
}

export default App;
