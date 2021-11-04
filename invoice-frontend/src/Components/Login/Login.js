import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import api from '../services/api';
import './Login.css';

export default function Restrict() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // async function handleLogin(event) {
  //   event.preventDefault();

  //   await api
  //     .post('/auth', {
  //       username,
  //       password,
  //     })
  //     .then((resp) => {
  //       const { data } = resp;
  //       if (data) {
  //         localStorage.setItem('app-token', data.token);
  //       }
  //       console.log('Email ou senha inválido(s)');
  //     })
  //     .catch((err) => {
  //       window.alert('Email ou password inválido(s)');
  //     });
  // }

  return (
    <div className='loginContainer' id='page-restrict'>
      <div className='content-wrapper'>
        <div className='loginCard'>
          <div className='loginCardText'>
            <h1>
              PT <span>invoice</span>
            </h1>
            <h4>All your invoices by the distance of a click</h4>
          </div>
          <div className='login-area'>
            <form className='loginForm'>
              <div className='input-area'>
                <div className='input-block loginUsernameDiv'>
                  <label className="loginFormLabels" htmlFor='username'>Username</label>
                  <input
                    className='loginFormInputs'
                    id='username'
                    type='text'
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className='input-block loginPassDiv'>
                  <label className='loginFormLabels' htmlFor='password'>
                    Password
                  </label>
                  <input
                    className='loginFormInputs'
                    id='password'
                    type='password'
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='help-area'>
                  <div className='checkboxBlock'>
                    <input
                      className='loginRememberInput'
                      type='checkbox'
                      name='remember'
                      id='remember'
                    />
                    <label htmlFor='remember'>Remember me</label>
                  </div>
                </div>
              </div>
              <Link to='/user'>
                <button type='submit' className='loginButton'>
                  Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
