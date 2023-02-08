import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Landing from './pages/home/Landing';
import './style/custom.css';
import './App.css';
import { Helmet } from 'react-helmet';

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
      </Routes>
    </>
  );
}

export default App;
