import Logo from '../../assets/logo.png';
import IconRegister from '../../assets/icon-regist.svg';
import FacebookIcon from '../../assets/facebook.png';
import GoogleIcon from '../../assets/google.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register() {
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

    const registerHandler = async (e) => {
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
                        <img src={IconRegister} alt="Login" />
                    </div>
                    <div className="auth-input-wrapper col-xl-6 col-md-6 vh-100 px-5 py-5">
                        <form className="auth-wrapper" onSubmit={registerHandler}>
                            <Link className="navbar-brand auth-icon mt-4 mb-5" to="/">
                                <img src={Logo} alt="Wikrama Shop" width="40" className="d-inline-block align-text-top" />
                                <h4>Wikrama <span>Shop</span></h4>
                            </Link>
                            <h4 className="title-auth mb-5">Buat Akun</h4>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control auth-input shadow-none" id="floatingInput" placeholder="Nama Lengkap" value={name} onChange={(e) => setName(e.target.value)} />
                                <label for="floatingInput">Nama Lengkap</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control auth-input shadow-none" id="floatingInput" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <label for="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control auth-input shadow-none" id="floatingInput" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="form-floating me-3">
                                    <input type={type} className="form-control auth-input password-input shadow-none" id="floatingInput" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label for="floatingInput">Password</label>
                                </div>
                                <div className="form-floating">
                                    <input type={type} className="form-control auth-input password-input shadow-none" id="floatingInput" placeholder="Konfirmasi Password" value={confirmationPassword} onChange={(e) => setConfirmationPassword(e.target.value)} />
                                    <label for="floatingInput">Konfirmasi Password</label>
                                </div>
                            </div>
                            <div class="form-check text-auth mb-5">
                                <input class="form-check-input shadow-none" type="checkbox" id="flexCheckChecked" onClick={showPasswordHandler} />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Tampilkan password
                                </label>
                            </div>
                            <div className="btn-auth text-center mb-5">
                                <button>Register</button>
                            </div>
                            <div className="text-auth text-center">
                                <p>Sudah memiliki akun ? <Link to="/login">Login</Link></p>
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

export default Register;