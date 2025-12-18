function About() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="mb-4">Nuestra Historia</h2>
                        <p className="text-muted">
                            Desde 2020, Café Delicia ha sido el refugio perfecto para los amantes del café.
                            Seleccionamos los mejores granos de las regiones cafetaleras del Perú para
                            ofrecerte una experiencia única en cada taza.
                        </p>
                        <p className="text-muted">
                            Nuestro compromiso es con la calidad, el sabor auténtico y el servicio excepcional.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
                            alt="Cafetería"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About