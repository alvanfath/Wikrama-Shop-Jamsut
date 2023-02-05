import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import RekomendasiProduk from './components/RekomendasiProduk';
import CardKategori from './components/CardKategori';
import CTAMotor from './components/CTAMotor';
import ProdukLainnya from './components/ProdukLainnya';
import Footer from './components/Footer';
import './style/custom.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login'; 


function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <RekomendasiProduk />
      <CardKategori />
      <CTAMotor />
      <ProdukLainnya />
      <Footer />
    </div>
  );
}

export default App;
