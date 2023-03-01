import axios from "axios";
import { faBoxOpen, faCashRegister, faHouseChimney, faPowerOff, faTags, faTruckFast, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar(props) {
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Get Token
    const token = localStorage.getItem('webmin_token');

    // Logout
    const logoutHandler = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get('http://127.0.0.1:8000/api/webmin/logout')
        .then(() => {
            localStorage.removeItem('webmin_token');
            navigate('/webmin/login');
        });
    }

    return (
        <>
            <div className={
                props.sidebar === 'show' ? 'webmin-sidebar show' : 'webmin-sidebar'
            }>
                <ul className="webmin-sidemenu">
                    <li className="webmin-title-sidelink">Dashboard</li>
                    <Link className="webmin-link" to="/webmin">
                        <li className={
                            location.pathname === '/webmin' ? 'webmin-sidelink mb-4 active' : 'webmin-sidelink mb-4'
                        }>
                            <FontAwesomeIcon className="me-3" icon={faHouseChimney} />Dashboard
                        </li>
                    </Link>
                    <li className="webmin-title-sidelink">Kasir App</li>
                    <Link className="webmin-link" to="/webmin/kasir">
                        <li className={
                            location.pathname === '/webmin/kasir' ? 'webmin-sidelink mb-3 active' : 'webmin-sidelink mb-3'
                        }>
                            <FontAwesomeIcon className="me-3" icon={faCashRegister} />Kasir
                        </li>
                    </Link>
                    <li className="webmin-title-sidelink">Master Data</li>
                    <Link className="webmin-link" to="/webmin/produk">
                        <li className={
                            location.pathname === '/webmin/produk' ? 'webmin-sidelink mb-3 active' : 'webmin-sidelink mb-3'
                        }>
                            <FontAwesomeIcon className="me-3" icon={faBoxOpen} />Produk
                        </li>
                    </Link>
                    <Link className="webmin-link" to="/webmin/kategori">
                        <li className={
                            location.pathname === '/webmin/kategori' ? 'webmin-sidelink mb-3 active' : 'webmin-sidelink mb-3'
                        }>
                            <FontAwesomeIcon className="me-3" icon={faTags} />Kategori
                        </li>
                    </Link>
                    <Link className="webmin-link" to="/webmin/supplier">
                        <li className={
                            location.pathname === '/webmin/supplier' ? 'webmin-sidelink mb-3 active' : 'webmin-sidelink mb-3'
                        }>
                            <FontAwesomeIcon className="me-3" icon={faTruckFast} />Supplier
                        </li>
                    </Link>
                    <Link className="webmin-link" to="/webmin/users">
                        <li className={
                            location.pathname === '/webmin/users' ? 'webmin-sidelink mb-4 active' : 'webmin-sidelink mb-4'
                        }>
                            <FontAwesomeIcon className="me-3" icon={faUsers} />Users
                        </li>
                    </Link>
                    <li className="webmin-title-sidelink">Profile</li>
                    <Link className="webmin-link" to="/webmin/profile">
                        <li className={
                            location.pathname === '/webmin/profile' ? 'webmin-sidelink mb-4 active' : 'webmin-sidelink mb-4'
                        }>
                            <FontAwesomeIcon className="me-3" icon={faUser} />Profile
                        </li>
                    </Link>
                    <button className="webmin-btn-logout" onClick={() => setModalShow(true)}>
                        <FontAwesomeIcon className="me-2" icon={faPowerOff} />Logout
                    </button>
                    {/* Logout Modal */}
                    <Modal
                        show={modalShow}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        >
                        <Modal.Header className="justify-content-center">
                            <Modal.Title id="contained-modal-title-vcenter">
                            Logout
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p className="mb-0 text-center">
                                Apakah anda yakin untuk keluar ?
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setModalShow(false)}>Tidak</Button>
                            <Button variant="danger" onClick={logoutHandler}>Keluar</Button>
                        </Modal.Footer>
                    </Modal>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;