import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Landing from './pages/home/Landing';
import Keranjang from './pages/home/Keranjang';
import DetailProduk from './pages/home/DetailProduk';
import Pembayaran from './pages/home/Pembayaran';
import Webmin from './pages/admin/Webmin';
import LoginAdmin from './pages/admin/LoginAdmin';
import ProfileAdmin from './pages/admin/ProfileAdmin';
import Profil from './pages/home/Profil';
import Alamat from './pages/home/Alamat';
import Pesanan from './pages/home/Pesanan';
import './style/custom.css';
import './style/profil.css';
import './App.css';
import Kasir from './pages/admin/Kasir';
import Supplier from './pages/admin/supplier/Supplier';

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
        <Route path="/profil" element={<Profil />}></Route>
        <Route path="/alamat" element={<Alamat />}></Route>
        <Route path="/pesanan" element={<Pesanan />}></Route>
        <Route path="/webmin/login" element={<LoginAdmin />}></Route>
        <Route path="/webmin" element={<Webmin />}>
          <Route path="profile" element={<ProfileAdmin />}></Route>
          <Route path="kasir" element={<Kasir />}></Route>
          <Route path="supplier" element={<Supplier />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
