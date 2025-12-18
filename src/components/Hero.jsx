function Hero() {
    return (
        <section className="bg-dark text-white text-center py-5" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container">
                <h1 className="display-3 fw-bold mb-4">Bienvenido a Café Delicia</h1>
                <p className="lead mb-4">El mejor café artesanal de Lima</p>
                <a href="#/menu" className="btn btn-warning btn-lg">Ver Menú</a>
            </div>
        </section>
    )
}

export default Hero