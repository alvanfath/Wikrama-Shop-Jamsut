import Logo from '../../assets/logo.png';
import IconLogin from '../../assets/icon-login.svg';
import FacebookIcon from '../../assets/facebook.png';
import GoogleIcon from '../../assets/google.png';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [type, setType] = useState('password');
    const [validation, setValidation] = useState([]);
    const navigate = useNavigate();
    const { state } = useLocation();

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        await axios.post('http://127.0.0.1:8000/api/login', formData)
        .then((res) => {
            if(res.data.error) {
                notifyMustVerified(res.data.error);
                navigate('/login');
            } else {
                localStorage.setItem('token', res.data.access_token);
                navigate('/');
            }
        }).catch((error) => {
            setValidation(error.response.data);
            notifyLoginFailed(error.response.data.error);
        });
    }

    // Show Password
    const showPasswordHandler = () => {
        if(type == 'password') {
            setType('text');
        } else {
            setType('password');
        }
    }

    // Toast
    const notifyMustVerified = async (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
        });
    }

    const notifyLoginFailed = async (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
        });
    }

    useEffect(() => {
        if(state == 'Sesi login berakhir, silahkan login kembali') {
            toast.warning(state, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });
        } else {
            toast.success(state, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });
        }
    }, [state]);

    window.history.replaceState(null, null, "/login");

    // Middleware Auth
    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/');
        }
    });

    return (
        <>
            <ToastContainer />
            <div className="container-fluid">
                <div className="row auth-container">
                    <div className="auth-image-wrapper col-6 bg-blue vh-100 px-5 py-3">
                        <img src={IconLogin} alt="Login" />
                    </div>
                    <div className="auth-input-wrapper col-xl-6 col-md-6 vh-100 px-5 py-4">
                        <form className="auth-wrapper" onSubmit={loginHandler}>
                            <Link className="navbar-brand auth-icon mt-4 mb-5" to="/">
                                <img src={Logo} alt="Wikrama Shop" width="40" className="d-inline-block align-text-top" />
                                <h4>Wikrama <span>Shop</span></h4>
                            </Link>
                            <h4 className="title-auth mb-3">Silahkan Login</h4>
                            <div className="form-floating mb-2">
                                <input type="text" className={
                                    validation.email ?
                                    "form-control auth-input validation-error shadow-none"
                                    :
                                    "form-control auth-input shadow-none"
                                } id="floatingInput1" placeholder="Email atau username" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="floatingInput1">Email atau username</label>
                                {
                                    validation.email && 
                                    (
                                        <div className="validation-error mt-1">
                                            {validation.email}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="form-floating mb-3">
                                <input type={type} className={
                                    validation.password ?
                                    "form-control auth-input login-input validation-error shadow-none"
                                    :
                                    "form-control auth-input login-input shadow-none"
                                } id="floatingInput2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="floatingInput2">Password</label>
                                {
                                    validation.password && 
                                    (
                                        <div className="validation-error mt-1">
                                            {validation.password}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="form-check text-auth mb-4">
                                <input className="form-check-input shadow-none" type="checkbox" id="flexCheckChecked" onClick={showPasswordHandler} />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Tampilkan password
                                </label>
                            </div>
                            <div className="btn-auth text-center mb-4">
                                <button>Login</button>
                            </div>
                            <div className="text-auth text-center">
                                <p>Belum memiliki akun ? <Link to="/register">Buat akun</Link></p>
                            </div>
                        </form>
                        <div className="d-flex flex-row mt-3 mb-3">
                            <div className="grey-line">──────────</div>
                            <p className="divider-or mx-2">ATAU</p>
                            <div className="grey-line">──────────</div>
                        </div>
                        <div className="other-auth mb-4">
                            <button className="auth-facebook"><img className="me-2" src={FacebookIcon} alt="Facebook" /> Facebook</button>
                            <button className="auth-google"><img className="me-2" src={GoogleIcon} alt="Facebook" /> Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;