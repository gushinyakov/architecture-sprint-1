import React from 'react';
import eventEmitter from 'shared_feature/event-emitter';
import apiAuth from '../utils/api';
import { Link } from 'react-router-dom';
import '../styles/auth-form/auth-form.css';


function Register() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        apiAuth.register(email, password)
            .then(() => {
                // TODO: как правильнее обрабатывать успешную регистрацию? 
                // Делать event от микросервиса и слушать в основном приложении и на success делать redirect
                // или можно здесь вызвать react-router-dom
                eventEmitter.dispatch('auth-signup', { status: 'success' })
            })
            .catch((e) => {
                eventEmitter.dispatch('auth-signup', { status: 'error' })
            });
    }

    return (
        <>
            <div className="auth-form">
                <form className="auth-form__form" onSubmit={handleSubmit}>
                    <div className="auth-form__wrapper">
                        <h3 className="auth-form__title">Регистрация</h3>
                        <label className="auth-form__input">
                            <input type="text" name="email" id="email"
                                className="auth-form__textfield" placeholder="Email"
                                onChange={e => setEmail(e.target.value)} required />
                        </label>
                        <label className="auth-form__input">
                            <input type="password" name="password" id="password"
                                className="auth-form__textfield" placeholder="Пароль"
                                onChange={e => setPassword(e.target.value)} required />
                        </label>
                    </div>
                    <div className="auth-form__wrapper">
                        <button className="auth-form__button" type="submit">Зарегистрироваться</button>
                        {/* TODO: Как правильно работать с роутингом? */}
                        <p className="auth-form__text">Уже зарегистрированы? <Link to="/signin" className="auth-form__link">Войти</Link></p>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Register;
