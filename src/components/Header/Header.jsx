import './Header.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../../assets/headerlogo.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Cierra el menú si cambias el tamaño a desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 860) setMenuOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header header--solid">
            <div className="header__inner">
                <img className="header__logo" src={Logo} alt="Columna Saludable" />

                {/* Botón menú (solo mobile/tablet) */}
                <button
                    className="header__menuBtn"
                    type="button"
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                    aria-controls="primary-nav"
                    onClick={() => setMenuOpen((p) => !p)}
                >
                    <span className="header__menuIcon" aria-hidden="true" />
                </button>

                {/* Nav */}
                <nav
                    id="primary-nav"
                    className={`header__nav ${menuOpen ? 'is-open' : ''}`}
                    aria-label="Primary navigation"
                >
                    <NavLink to="/" className="header__link" onClick={closeMenu}>
                        Inicio
                    </NavLink>

                    <NavLink to="/services" className="header__link" onClick={closeMenu}>
                        Servicios
                    </NavLink>

                    <NavLink to="/about" className="header__link" onClick={closeMenu}>
                        Sobre la Clinica
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className="header__link header__link--cta"
                        onClick={closeMenu}
                    >
                        Contactanos
                    </NavLink>
                </nav>

                {/* Backdrop (solo cuando está abierto en mobile) */}
                {menuOpen && (
                    <button
                        className="header__backdrop"
                        aria-label="Cerrar menú"
                        type="button"
                        onClick={closeMenu}
                    />
                )}
            </div>
        </header>
    );
}