import DefaultProfile from "../assets/profil.png";
import Logo from "../assets/logo.png";
import Sidebar from '../components/Sidebar';
import axios from "axios";
import { Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

function NavWebmin() {
    const [username, setUsername] = useState('');
    const [toogleSidebar, setToogleSidebar] = useState('');
    const navigate = useNavigate();

    // Get Token
    const token = localStorage.getItem('webmin_token');

    // Get Data User Logged In
    const fetchUser = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get('http://127.0.0.1:8000/api/webmin/my-profile')
        .then((res) => {
            setUsername(res.data.username);
        }).catch((error) => {
            if(error.response) {
                localStorage.removeItem('webmin_token');
                navigate('/webmin/login', {
                    state: 'Sesi login berakhir, silahkan login kembali'
                });
            }
        });
    }

    const toogleSidebarHandler = () => {
        if(toogleSidebar == '') {
            setToogleSidebar('show');
        } else if(toogleSidebar == 'show') {
            setToogleSidebar('');
        }
    }

    // Middleware Auth
    useEffect(() => {
        if(token) {
            fetchUser();
        } else {
            navigate('/webmin/login');
        }
    }, []);

    return (
        <>
            <Navbar bg="light" expand="lg" className="webmin-navbar shadow-sm sticky-top">
                <Container fluid className="webmin-navbar-container">
                    <Link to="/webmin" className="webmin-brand d-flex align-items-center">
                        <img className="webmin-logo me-3" src={Logo} alt="Wikrama Shop" />
                        <h5 className="webmin-brand mb-0"><span class="webmin-wikrama">Wikrama</span>Shop</h5>
                    </Link>
                    <div className="webmin-display-user">
                        <Link to="/webmin/profile">                        
                            {username}
                            <img className="ms-3" src={DefaultProfile} alt="Photo Profile" width="35" />
                        </Link>
                    </div>
                    <button onClick={toogleSidebarHandler} className="webmin-sidebar-toogler"><FontAwesomeIcon icon={faAlignJustify} /></button>
                </Container>
            </Navbar>
            <Sidebar sidebar={toogleSidebar} />
        </>
    )
}

export default NavWebmin;