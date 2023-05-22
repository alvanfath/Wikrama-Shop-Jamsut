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
import Kasir from './pages/admin/Kasir';
import Supplier from './pages/admin/Supplier';
// import Produk from './pages/admin/produk/Produk';
// import Kategori from './pages/admin/kategori/Kategori';
import './style/custom.css';
import './App.css';

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
        <Route path="/webmin/login" element={<LoginAdmin />}></Route>
        <Route path="/webmin" element={<Webmin />}>
          <Route path="profile" element={<ProfileAdmin />}></Route>
          <Route path="kasir" element={<Kasir />}></Route>
          {/* <Route path="produk" element={<Produk />}></Route> */}
          {/* <Route path="kategori" element={<Kategori />}></Route> */}
          <Route path="supplier" element={<Supplier />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
