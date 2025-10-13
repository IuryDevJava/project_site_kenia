import './App.css';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Service from './components/Services-appointments/Service';
import EspacoSection from './components/Services-appointments/EspacoSection';
import Products from './components/Products/Products';


function App() {
  return (
    <div className="app">
      <Menu />
      <About />
      <Service />
      <EspacoSection />
      <Products />
      
    </div>
  );
}

export default App;
