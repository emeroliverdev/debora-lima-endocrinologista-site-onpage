import Header from "./componentes/header";
import NavBar from "./componentes/navBar";
import SectionProfile from "./componentes/sectionProfile";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <SectionProfile />
      </main>
    </>
  );
}

export default App;
