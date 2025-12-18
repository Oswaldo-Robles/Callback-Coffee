function Hero() {
    return (
        <section className="bg-dark text-white text-center py-5 hero-overlay" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container">
                <h1 className="display-3 fw-bold mb-4">☕ Callback Coffee</h1>
                <p className="lead mb-4" style={{ fontSize: '1.5rem', color: '#FFD700' }}>
                    "El café que siempre vuelve"
                </p>
                <p className="mb-4">Café artesanal de alta calidad en el corazón de Lima</p>
                <a href="#/menu" className="btn btn-warning btn-lg px-5">Ver Menú</a>
            </div>
        </section>
    )
}

export default Hero