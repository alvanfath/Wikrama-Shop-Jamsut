import { Link } from "react-router-dom";
import FTProfil from "../assets/ftprofil.jpg";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3,

        }}
    />
);


function SidebarProfil() {
    return (
        <>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Profil</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Ubah Profile</a></li>
                        <li>
                            <a className="dropdown-item" href="#">Alamat</a>
                        </li>
                    </ul>
                </li>
                <li className="dropdown-item">
                    <a className="nav-link" href="#">
                       <span>Pesanan Anda</span>
                    </a>
                </li>
            </div>
            <div className="sidebar-profil col-3">
                <div className="sidebar-profil-user col-12">
                    <div className="row">
                        <div className="col-3">
                            <div className="sidebar-img-profil">
                                <img src={FTProfil}></img>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="sidebar-user-profil">
                                <span>Nama User</span>
                                <a href=""><p>Ubah profil</p></a>
                            </div>
                        </div>
                    </div>
                    <ColoredLine color={"#00000040"} />
                    <div className="sidebar-menu" id="navbarSupportedContent">
                        <ul class="menu">
                            <li class="sidebar-item">
                                <li className="sidebar-title">
                                    <a href="#" class="sidebar-link">
                                        <i className="icon-title"><FontAwesomeIcon icon={faUserAlt} /></i>
                                        <span>Akun Saya</span>
                                    </a>
                                </li>
                                <ul class="submenu">
                                    <li class="submenu-item">
                                        <a href="#">Profil</a>
                                    </li>
                                    <li class="submenu-item">
                                        <a href="#">Alamat</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="sidebar-title">
                                <a href="#" class="sidebar-link">
                                    <i class="icon-title"><FontAwesomeIcon icon={faClipboard} /></i>
                                    <span>Pesanan Saya</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarProfil;