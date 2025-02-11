import { Fragment, lazy, useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// TODO?? 
import eventEmitter from 'shared_feature/event-emitter';
import AuthContext from "shared_context/AuthContext"
import useAuthToken from 'auth_mf/useAuthToken'

const Login = lazy(() => import('auth_mf/Login'))
const Register = lazy(() => import('auth_mf/Register'))
const Notification = lazy(() => import('shared_notification/Notification'))

import "./index.css";

const App = () => {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState<string | null>(null)

    useAuthToken()

    const signinHandler = (value: { status: 'success', token: string, email: string } | { status: 'error' }) => {
        switch (value.status) {
            case 'success':
                setIsLoggedIn(true)
                setUserEmail(value.email)
                history.push('/')
                break;
            case 'error':
                setIsLoggedIn(false)
                setUserEmail(null)
                eventEmitter.dispatch('notification-open', { status: 'error', text: 'Что-то пошло не так! Попробуйте ещё раз.' })
                break;
        }
    }

    const signupHandler = (value: { status: 'success' } | { status: 'error' }) => {
        switch (value.status) {
            case 'success':
                history.push('/signin')
                eventEmitter.dispatch('notification-open', { status: 'success', text: 'Вы успешно зарегистрировались' })
                break;
            case 'error':
                eventEmitter.dispatch('notification-open', { status: 'error', text: 'Что-то пошло не так! Попробуйте ещё раз.' })
                break;
        }
    }

    const signoutHandler = () => {
        eventEmitter.dispatch('auth-signout', undefined)
        history.push('/signin')
        setIsLoggedIn(false)
    }

    useEffect(() => {
        eventEmitter.subscribe('auth-signup', (data) => signupHandler(data))
        eventEmitter.subscribe('auth-signin', (data) => signinHandler(data))
        return () => {
            eventEmitter.unsubscribe('auth-signup', signupHandler)
            eventEmitter.unsubscribe('auth-signin', signinHandler)
        }
    }, []);


    return (
        (
            <AuthContext.Provider value={{ isLoggedIn, email: userEmail }}>
                <Fragment>
                    <div className="page__content">
                        <Header onSignOut={signoutHandler} />
                        <Switch>
                            <ProtectedRoute exact path="/">
                                <Home />
                            </ProtectedRoute>
                            <Route path="/signin">
                                <Login />
                            </Route>
                            <Route path="/signup">
                                <Register />
                            </Route>

                        </Switch>
                        <Footer />
                    </div>
                    <Notification />
                </Fragment>
            </AuthContext.Provider>

        )
    )
};

export default App