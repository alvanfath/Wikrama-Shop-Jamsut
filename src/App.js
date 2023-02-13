import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Landing from './pages/home/Landing';
import Keranjang from './pages/home/Keranjang';
import './style/custom.css';
import './App.css';
import { Helmet } from 'react-helmet';
import DetailProduk from './pages/home/DetailProduk';
import Pembayaran from './pages/home/Pembayaran';

function App() {
  return (
    <>
    <Helmet>
      <title>Wikrama Shop</title>
    </Helmet>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/detail-produk" element={<DetailProduk />}></Route>
        <Route path="/keranjang" element={<Keranjang />}></Route>
        <Route path="/pembayaran" element={<Pembayaran />}></Route>
      </Routes>
    </>
  );
}

export default App;
