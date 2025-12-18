function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Columna 1: Marca */}
          <div className="col-md-4 mb-4">
            <h4 style={{ color: '#FFD700' }}>
              <i className="bi bi-cup-hot-fill me-2"></i>
              Callback Coffee
            </h4>
            <p className="text-muted">"El café que siempre vuelve"</p>
            <p className="small">
              Café artesanal de alta calidad. Cada taza es una experiencia única
              preparada con los mejores granos peruanos.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3" style={{ color: '#FFD700' }}>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#/" className="text-white-50 text-decoration-none">
                  <i className="bi bi-house-door-fill me-2"></i>
                  Inicio
                </a>
              </li>
              <li className="mb-2">
                <a href="#/menu" className="text-white-50 text-decoration-none">
                  <i className="bi bi-cup-hot me-2"></i>
                  Nuestro Menú
                </a>
              </li>
              <li className="mb-2">
                <a href="#/contacto" className="text-white-50 text-decoration-none">
                  <i className="bi bi-envelope-fill me-2"></i>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3" style={{ color: '#FFD700' }}>Contáctanos</h5>
            <p className="small mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Av. Alfredo Benavides 778
            </p>
            <p className="small mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              +51 999 888 777
            </p>
            <p className="small mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              info@callbackcoffee.pe
            </p>
            <p className="small mb-3">
              <i className="bi bi-clock-fill me-2"></i>
              Lun-Dom: 8:00 AM - 10:00 PM
            </p>

            {/* Redes sociales */}
            <div className="mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3" style={{ fontSize: '1.5rem' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3" style={{ fontSize: '1.5rem' }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <hr style={{ borderColor: '#8B4513', margin: '2rem 0' }} />

        {/* Copyright y Developer */}
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 small text-muted">
              <i className="bi bi-c-circle me-1"></i>
              2024 Callback Coffee. Todos los derechos reservados.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 small">
              Desarrollado por{' '}
              <span style={{ color: '#FFD700', fontWeight: '600' }}>
                Oswaldo Robles
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer