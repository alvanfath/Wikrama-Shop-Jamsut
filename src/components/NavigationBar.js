import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Logo from "../assets/logo.png";
import DefaultProfile from "../assets/profil.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavigationBar() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    // Get Token
    const token = localStorage.getItem('token');

    // Get Data User Logged In
    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get('http://127.0.0.1:8000/api/my-profile')
        .then((res) => {
            setUsername(res.data.username);
        });
    }

    // Logout
    const logoutHandler = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get('http://127.0.0.1:8000/api/logout')
        .then(() => {
            localStorage.removeItem('token');
            navigate('/login');
        });
    }

    // Middleware Auth
    useEffect(() => {
        if(token) {
            fetchData();
        }
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Wikrama Shop" width="40" className="d-inline-block align-text-top" />
                        <h4>Wikrama <span>Shop</span></h4>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <form className="d-flex me-4" role="search">
                            <input className="form-control search shadow-none me-2" type="search" placeholder="Cari Barang" aria-label="Search"></input>
                        </form>
                        {
                            token ?
                            (
                                <>
                                     <Link to="/keranjang">
                                        <span className="shop-bag me-3"><FontAwesomeIcon icon={faCartShopping} /></span>
                                    </Link>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img width="35" src={DefaultProfile} alt="Photo Profile" className="me-2" />
                                            {username}
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Profile</a></li>
                                            <li>
                                                <a onClick={logoutHandler} className="dropdown-item" href="#">Logout</a>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            )
                            :
                            (
                                <>
                                    <Link to="/login">
                                        <button className="btn-outline me-3">Login</button>
                                    </Link>
                                    <Link to="/register">
                                        <button className="btn-solid">Daftar</button>
                                    </Link>
                                </>
                            )
                        }

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;