import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function NavigationBar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Wikrama Shop" width="40" className="d-inline-block align-text-top"></img>
                        <h4>Wikrama <span>Shop</span></h4>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <form className="d-flex me-4" role="search">
                            <input className="form-control search me-2" type="search" placeholder="Cari Barang" aria-label="Search"></input>
                        </form>
                        <Link to="/login">
                            <button className="btn-outline me-3">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn-solid me-3">Daftar</button>
                        </Link>
                        <span className="shop-bag"><FontAwesomeIcon icon={faCartShopping} /></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;