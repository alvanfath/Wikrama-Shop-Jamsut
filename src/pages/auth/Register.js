import Logo from '../../assets/logo.png';
import IconRegister from '../../assets/icon-regist.svg';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="auth-image-wrapper col-6 bg-blue vh-100 px-5 py-3">
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} alt="Wikrama Shop" width="40" className="d-inline-block align-text-top"></img>
                            <h4>Wikrama <span className="text-white">Shop</span></h4>
                        </Link>
                        <img src={IconRegister} alt="Login"></img>
                    </div>
                    <div className="auth-input-wrapper col-6 vh-100 px-5 py-3">
                        <div className="auth-wrapper">
                            <h4 className="mb-5">Buat Akun</h4>
                            <div className="mb-4">
                                <input type="text" className="form-control login-input shadow-none" placeholder="Username" />
                            </div>
                            <div className="mb-4">
                                <input type="password" className="form-control login-input shadow-none" placeholder="Password" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control login-input shadow-none" placeholder="Konfirmasi Password" />
                            </div>
                            <div className="text-gray mb-5">
                                <p>Sudah memiliki akun ? <Link to="/login">Login</Link></p>
                            </div>
                            <div className="btn-auth text-center">
                                <button>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;