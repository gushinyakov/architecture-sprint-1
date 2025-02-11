import React from 'react';
import eventEmitter from 'shared_feature/event-emitter';
import storage from 'shared_feature/storage';

import '../styles/auth-form/auth-form.css';
import apiAuth from '../utils/api';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        apiAuth.login(email, password)
            .then((data) => {
                storage.setItem('auth-jwt', data.token);
                eventEmitter.dispatch('auth-signin', { status: 'success', token: data.token, email })
            })
            .catch((e) => {
                storage.removeItem('auth-jwt');
                eventEmitter.dispatch('auth-signin', { status: 'error' })
            });
    }

    return (
        <div className="auth-form">
            <form className="auth-form__form" onSubmit={handleSubmit}>
                <div className="auth-form__wrapper">
                    <h3 className="auth-form__title">Вход</h3>
                    <label className="auth-form__input">
                        <input type="text" name="name" id="email"
                            className="auth-form__textfield" placeholder="Email"
                            onChange={e => setEmail(e.target.value)} required />
                    </label>
                    <label className="auth-form__input">
                        <input type="password" name="password" id="password"
                            className="auth-form__textfield" placeholder="Пароль"
                            onChange={e => setPassword(e.target.value)} required />
                    </label>
                </div>
                <button className="auth-form__button" type="submit">Войти</button>
            </form>
        </div>
    )
}

export default Login;
