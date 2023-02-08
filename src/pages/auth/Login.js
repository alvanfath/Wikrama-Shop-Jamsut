import { UilEye, UilEyeSlash } from '@iconscout/react-unicons';
import { useState } from 'react';
import '../../style/auth.css';

const Login = () => {
    const [inputType, setInputType] = useState("password");
    const [icon, setIcon] = useState(<UilEyeSlash color="#5278Ff" />);

    const showPasswordHandler = () => {
        if(inputType == "password") {
            setIcon(<UilEye color="#5278Ff" />);
            setInputType("text");
        } else {
            setIcon(<UilEyeSlash color="#5278Ff" />);
            setInputType("password");
        }
    }

    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-image-wrapper">
                    a
                </div>
                <div className="auth-input-wrapper">
                    <h5>Silahkan Login</h5>
                    <div className="auth-input">
                        <div className="mb-3">
                            <input className="form-control shadow-none" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <div className="input-password">
                                <input type={inputType} className="form-control shadow-none" placeholder="Password" />
                                <span onClick={showPasswordHandler}>{icon}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn-auth mt-4">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
