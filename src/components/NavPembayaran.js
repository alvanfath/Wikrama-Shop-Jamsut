import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function NavPembayaran() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-blue sticky-top">
                <div className="container">
                    <h4 className="text-white">Pembayaran</h4>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <Link to="/">
                            <div className="back-bar">
                                <span className="circle-arrow-left"><FontAwesomeIcon icon={faCircleArrowLeft} /></span>
                                <p className="back-bar-text">Back</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavPembayaran;