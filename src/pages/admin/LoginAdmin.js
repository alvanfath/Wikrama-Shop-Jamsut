import Logo from '../../assets/logo.png';
import axios from 'axios';
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import '../../style/logmin.css';

function LoginAdmin() {
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

        await axios.post(process.env.REACT_APP_API + '/webmin/login', formData)
        .then((res) => {
            localStorage.setItem('webmin_token', res.data.access_token);
            navigate('/webmin');
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
        toast.warning(state, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
        });
    }, [state]);

    window.history.replaceState(null, null, "/webmin/login");

    // Middleware Auth
    useEffect(() => {
        if(localStorage.getItem('webmin_token')) {
            navigate('/webmin');
        }
    });
    
    return (
        <>
            <ToastContainer />
            <Container fluid className="logmin-container">
                <div className="logmin-wrapper">
                    <div className="logmin-header">
                        <Link className="logmin-brand auth-icon mb-3" to="/">
                            <img src={Logo} alt="Wikrama Shop" width="40" className="d-inline-block align-text-top" />
                            <h4>Wikrama <span className="logmin-shop">Shop</span></h4>
                        </Link>
                        <h5 className="text-center mb-3">Webmin Login</h5>
                    </div>
                    <div className="logmin-body">
                        <Form onSubmit={loginHandler}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email atau username</Form.Label>
                                <Form.Control className={validation.email && "is-invalid"} type="text" placeholder="Email atau username" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {
                                    validation.email && 
                                    (
                                        <div className="logmin-validation-error">
                                            {validation.email}
                                        </div>
                                    )
                                }
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className={validation.password && "is-invalid"} type={type} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                {
                                    validation.password && 
                                    (
                                        <div className="logmin-validation-error">
                                            {validation.password}
                                        </div>
                                    )
                                }
                            </Form.Group>
                            <Form.Check onClick={showPasswordHandler} className="logmin-show-password" type="checkbox" label="Tampilkan password" />
                            <div className="text-center">
                                <Button type="submit" className="logmin-btn mt-3" variant="primary">Login</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default LoginAdmin;