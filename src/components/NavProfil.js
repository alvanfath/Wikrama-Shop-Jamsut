import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavProfil() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-top bot-line">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Wikrama Shop" width="40" className="d-inline-block align-text-top" />
                        <h4>Wikrama <span>Shop</span></h4>
                    </Link>
                    <div className="collapse navbar-collapse justify-content-start">
                        <div className="vert-line">
                        <h4 className="mt-2">Profil</h4>
                        </div>                        
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default NavProfil;