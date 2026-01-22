import './Header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/loader logo.png';

export default function Header() {
    return (
        <header className="header header--glass">
            <div className="header__inner">
                <img className="header__logo" src={Logo} alt="Columna Saludable" />
                <nav className="header__nav" aria-label="Primary navigation">
                    <NavLink to="/" className="header__link">Inicio</NavLink>
                    <NavLink to="/services" className="header__link">Servicios</NavLink>
                    <NavLink to="/about-clinic" className="header__link">Sobre la Clinica</NavLink>
                    <NavLink to="/contact-us" className="header__link header__link--cta">Contactanos</NavLink>
                </nav>
            </div>
        </header>
    );
}
