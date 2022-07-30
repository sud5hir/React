import axios from 'axios';
import React, { useState } from 'react';
import { authentication } from '../Service/authentication';

function Login(props) {

    const [loginData, setLoginData] = useState(
        { UserName: '', Password: '' }
    );

    //  const [loginData, setLoginData] = useState({ Username: '', Password: '' });

    const changeLogInData = (e) => {
        setLoginData(prevstate => (
            { ...prevstate, [e.target.name]: e.target.value })
        );
    }

    const Login = () => {
        axios('https://localhost:5001/api/Login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: loginData
        }).then(result => {
            if (result) {
                localStorage.setItem('token', result.data.token,)
                authentication.onAuthentication();
                console.log(props);
                props.history.push('/Query');
            }
            else {
                alert('Invalid UserName or PassWord');
            }
        }).catch((error) => {
            console.error('Error:', error);
        });;
    }
    return (
        <div>
            <h2>Welcome to LogIn...</h2>
            <p>
                <label>Employee ID :
                    <input type="text" name="UserName" value={loginData.UserName}
                        onChange={changeLogInData}></input>
                </label>
            </p>
            <p>
                <label>Employee ID :
                    <input type="text" name="Password" value={loginData.Password}
                        onChange={changeLogInData}></input>
                </label>
            </p>
            {/* <p>
                <label>UserName : <input type="text" name="UserName" value={loginData.Username}
                    onChange={changeLogInData}   ></input></label>
            </p>
            <p>
                <label>PassWord : <input type="text" name="Password" value={loginData.Password}
                    onChange={changeLogInData}></input></label>
            </p> */}
            <button onClick={Login}>LogIn</button>
        </div>
    )
}

export default Login
