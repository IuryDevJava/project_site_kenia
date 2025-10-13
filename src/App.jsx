import "./App.css";
import About from "./components/About/About";
import FAQ from "./components/Faq/Faq";
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import EspacoSection from "./components/Services-appointments/EspacoSection";
import Service from "./components/Services-appointments/Service";

function App() {
  return (
    <div className="app">
      <Menu />
      <About />
      <Service />
      <EspacoSection />
      <Products />
      <FAQ />
    </div>
  );
}

export default App;
