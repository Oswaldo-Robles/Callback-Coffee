import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: '#2C1810' }}>
            <div className="container">
                {/* Logo y Marca */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <i className="bi bi-cup-hot-fill me-2" style={{ fontSize: '1.8rem', color: '#FFD700' }}></i>
                    <div>
                        <span style={{ color: '#FFD700', fontWeight: '700', fontSize: '1.3rem' }}>
                            Callback Coffee
                        </span>
                        <small className="d-block text-white-50" style={{ fontSize: '0.7rem', marginTop: '-5px' }}>
                            El café que siempre vuelve
                        </small>
                    </div>
                </Link>

                {/* Toggle para móvil */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links de navegación */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item mx-2">
                            <Link
                                className={`nav-link px-3 ${location.pathname === '/' ? 'active' : ''}`}
                                to="/"
                            >
                                <i className="bi bi-house-door-fill me-2"></i>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                className={`nav-link px-3 ${location.pathname === '/menu' ? 'active' : ''}`}
                                to="/menu"
                            >
                                <i className="bi bi-cup-hot me-2"></i>
                                Menú
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                className={`nav-link px-3 ${location.pathname === '/contacto' ? 'active' : ''}`}
                                to="/contacto"
                            >
                                <i className="bi bi-envelope-fill me-2"></i>
                                Contacto
                            </Link>
                        </li>
                        <li className="nav-item ms-3">
                            <a
                                href="https://api.whatsapp.com/send/?phone=51914733376"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm"
                                style={{
                                    backgroundColor: '#FFD700',
                                    color: '#2C1810',
                                    fontWeight: '600',
                                    borderRadius: '20px',
                                    padding: '8px 20px'
                                }}
                            >
                                <i className="bi bi-whatsapp me-2"></i>
                                Ordena Ya
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header