import React, { useState, Component } from "react";
import { useNavigate } from "react-router-dom";
import { showMeFetch } from "./fetch";
import './LoginPage.css';

import MainPage from "./MainPage";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const login = () => {
        const item={email, password};
        const checkLoginInfo = showMeFetch({
            url: 'http://localhost:3001/show_me_users',
            method: 'POST',
            body: item
        })
        .then((r) => {
            if (r.status !== 200) {
                setError(r.body.message);
                //return navigate('/login');
            }
            else{
                console.log('success!!');
                return navigate('/main');
            }
        }).catch((e) => setError(e.message));
    }

    //view for the login page
    return (
        <div className='center-screen'>
            <input className="field" placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <br />
            <input className="field" placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <br />
            <button className="button signIn" onClick={login} >Sign In</button>
            <br />
            <br />
            <button className="button Facebook"> Facebook</button>
            <br />
            <button className="button Twitter">Twitter</button>
            <br />
            {error.length > 0 && <p>{error}</p>}
        </div>
    );
    
}

export default LoginPage;