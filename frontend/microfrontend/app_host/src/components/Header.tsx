import { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
// @ts-ignore
import logoPath from '../images/logo.svg';
import AuthContext from 'shared_context/AuthContext';


interface Props {
    onSignOut: () => void;
}

const Header = ({ onSignOut }: Props) => {
    const auth = useContext(AuthContext);

    function handleSignOut() {
        onSignOut();
    }

    return (
        <header className="header page__section">
            <img src={logoPath} alt="Логотип проекта Mesto" className="logo header__logo" />
            <Route exact path="/">
                <div className="header__wrapper">
                    <p className="header__user">{auth?.email}</p>
                    <button className="header__logout" onClick={handleSignOut}>Выйти</button>
                </div>
            </Route>
            <Route path="/signup">
                <Link className="header__auth-link" to="signin">Войти</Link>
            </Route>
            <Route path="/signin">
                <Link className="header__auth-link" to="signup">Регистрация</Link>
            </Route>
        </header>
    )
}

export default Header;
