import './App.css';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Service from './components/Services-appointments/Service';
import EspacoSection from './components/Services-appointments/EspacoSection';
import Products from './components/Products/Products';
import Faq from './components/Faq/Faq';

function App() {
  return (
    <div className="app">
      <Menu />
      <About />
      <Service />
      <EspacoSection />
      <Products />
      <Faq />
    </div>
  );
}

export default App;
