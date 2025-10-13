import "./App.css";
import About from "./components/About/About";
import FAQ from "./components/FAQ/Faq";
import Menu from "./components/menu/Menu";
import Products from "./components/Products/Products";
import EspacoSection from "./components/services-appointments/EspacoSection";
import Service from "./components/services-appointments/Service";

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
