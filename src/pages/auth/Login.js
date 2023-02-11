import Logo from '../../assets/logo.png';
import IconLogin from '../../assets/icon-login.svg';
import FacebookIcon from '../../assets/facebook.png';
import GoogleIcon from '../../assets/google.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');

    const [type, setType] = useState('password');
    const [validation, setValidation] = useState([]);
    const navigate = useNavigate();

    const showPasswordHandler = () => {
        if(type == 'password') {
            setType('text');
        } else {
            setType('password');
        }
    }

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', confirmationPassword);

        await axios.post('http://127.0.0.1:8000/api/register', formData)
        .then(() => {
            navigate('/login')
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row auth-container">
                    <div className="auth-image-wrapper col-6 bg-blue vh-100 px-5 py-3">
                        <img src={IconLogin} alt="Login" />
                    </div>
                    <div className="auth-input-wrapper col-xl-6 col-md-6 vh-100 px-5 py-5">
                        <form className="auth-wrapper" onSubmit={loginHandler}>
                            <Link className="navbar-brand auth-icon mt-4 mb-5" to="/">
                                <img src={Logo} alt="Wikrama Shop" width="40" className="d-inline-block align-text-top" />
                                <h4>Wikrama <span>Shop</span></h4>
                            </Link>
                            <h4 className="title-auth mb-5">Silahkan Login</h4>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control auth-input shadow-none" id="floatingInput1" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <label htmlFor="floatingInput1">Username</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type={type} className="form-control auth-input login-input shadow-none" id="floatingInput2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="floatingInput2">Password</label>
                            </div>
                            <div className="form-check text-auth mb-5">
                                <input className="form-check-input shadow-none" type="checkbox" id="flexCheckChecked" onClick={showPasswordHandler} />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Tampilkan password
                                </label>
                            </div>
                            <div className="btn-auth text-center mb-5">
                                <button>Login</button>
                            </div>
                            <div className="text-auth text-center">
                                <p>Belum memiliki akun ? <Link to="/register">Buat akun</Link></p>
                            </div>
                        </form>
                        <div className="d-flex flex-row mt-4 mb-3">
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