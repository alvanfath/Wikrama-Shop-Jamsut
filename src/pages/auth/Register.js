import Logo from '../../assets/logo.png';
import IconRegister from '../../assets/icon-regist.svg';
import FacebookIcon from '../../assets/facebook.png';
import GoogleIcon from '../../assets/google.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');

    const [type, setType] = useState('password');
    const [validation, setValidation] = useState([]);
    const navigate = useNavigate();

    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('phone_number', phone);
        formData.append('password', password);
        formData.append('confirm_password', confirmationPassword);

        await axios.post('http://127.0.0.1:8000/api/register', formData)
        .then((res) => {
            navigate('/login', {
                state: res.data.message
            });
        }).catch((error) => {
            setValidation(error.response.data);
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

    // Middleware Auth
    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/');
        }
    });

    return (
        <>
            <div className="container-fluid">
                <div className="row auth-container">
                    <div className="auth-image-wrapper col-6 bg-blue vh-100 px-5 py-3">
                        <img src={IconRegister} alt="Login" />
                    </div>
                    <div className="auth-input-wrapper col-xl-6 col-md-6 vh-100 px-5 py-4">
                        <form className="auth-wrapper" onSubmit={registerHandler}>
                            <Link className="navbar-brand auth-icon mt-4 mb-5" to="/">
                                <img src={Logo} alt="Wikrama Shop" width="40" className="d-inline-block align-text-top" />
                                <h4>Wikrama <span>Shop</span></h4>
                            </Link>
                            <h4 className="title-auth mb-3">Buat Akun</h4>
                            <div className="form-floating mb-2">
                                <input type="text" className={
                                    validation.name ?
                                    "form-control auth-input validation-error shadow-none"
                                    :
                                    "form-control auth-input shadow-none"
                                } id="floatingInput1" placeholder="Nama Lengkap" value={name} onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="floatingInput1">Nama Lengkap</label>
                                {
                                    validation.name &&
                                    (
                                        <div className="validation-error mt-1">
                                            {validation.name}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="form-floating mb-2">
                                <input type="text" className={
                                    validation.username ?
                                    "form-control auth-input validation-error shadow-none"
                                    :
                                    "form-control auth-input shadow-none"
                                } id="floatingInput2" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <label htmlFor="floatingInput2">Username</label>
                                {
                                    validation.username &&
                                    (
                                        <div className="validation-error mt-1">
                                            {validation.username}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="form-floating mb-2">
                                <input type="email" className={
                                    validation.email ?
                                    "form-control auth-input validation-error shadow-none"
                                    :
                                    "form-control auth-input shadow-none"
                                } id="floatingInput3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="floatingInput3">Email</label>
                                {
                                    validation.email &&
                                    (
                                        <div className="validation-error mt-1">
                                            {validation.email}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="form-floating mb-2">
                                <input type="number" className={
                                    validation.phone_number ?
                                    "form-control auth-input validation-error shadow-none"
                                    :
                                    "form-control auth-input shadow-none"
                                } id="floatingInput4" placeholder="Nomor Telepon" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <label htmlFor="floatingInput4">Nomor Telepon</label>
                                {
                                    validation.phone_number &&
                                    (
                                        <div className="validation-error mt-1">
                                            {validation.phone_number}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="pass-res d-flex mb-4">
                                <div className="form-floating pass-first">
                                    <input type={type} className={
                                        validation.password ?
                                        "form-control auth-input password-input validation-error shadow-none"
                                        :
                                        "form-control auth-input password-input shadow-none"
                                    } id="floatingInput5" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="floatingInput5">Password</label>
                                    {
                                        validation.password &&
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.password}
                                            </div>
                                        )
                                }
                                </div>
                                <div className="form-floating">
                                    <input type={type} className={
                                        validation.confirm_password ?
                                        "form-control auth-input password-input validation-error shadow-none"
                                        :
                                        "form-control auth-input password-input shadow-none"
                                    } id="floatingInput6" placeholder="Konfirmasi Password" value={confirmationPassword} onChange={(e) => setConfirmationPassword(e.target.value)} />
                                    <label htmlFor="floatingInput6">Konfirmasi Password</label>
                                    {
                                        validation.confirm_password &&
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.confirm_password}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="form-check text-auth mb-4">
                                <input className="form-check-input shadow-none" type="checkbox" id="flexCheckChecked" onClick={showPasswordHandler} />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Tampilkan password
                                </label>
                            </div>
                            <div className="btn-auth text-center mb-4">
                                <button>Register</button>
                            </div>
                            <div className="text-auth text-center">
                                <p>Sudah memiliki akun ? <Link to="/login">Login</Link></p>
                            </div>
                        </form>
                        <div className="d-flex flex-row mt-3 mb-3">
                            <div className="grey-line">──────────</div>
                            <p className="divider-or mx-2">ATAU</p>
                            <div className="grey-line">──────────</div>
                        </div>
                        <div className="other-auth mb-4">
                            <a href="https://cf28-2001-448a-304a-51c6-a96b-3ad0-7da2-c74e.ngrok-free.app/api/auth/facebook">Facebook</a>
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