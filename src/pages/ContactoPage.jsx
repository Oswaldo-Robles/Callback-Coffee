function Contacto() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h2 className="text-center mb-4">Contáctanos</h2>

                    <div className="card shadow p-4">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" placeholder="Tu nombre" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="tu@email.com" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Mensaje</label>
                                <textarea className="form-control" rows="4" placeholder="Tu mensaje"></textarea>
                            </div>

                            <button type="submit" className="btn btn-warning w-100">Enviar Mensaje</button>
                        </form>
                    </div>

                    <div className="mt-5 text-center">
                        <h4>
                            <i className="bi bi-pin-map-fill me-2"></i>
                            Visítanos
                        </h4>

                        <p className="text-muted">
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            Av. Alfredo Benavides 778, Miraflores 15074
                        </p>

                        {/* Mapa de Google */}
                        <div className="mb-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8056521563312!2d-77.0274031889686!3d-12.125446143321915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81c605ea5e1%3A0x17328a8b49d37914!2sISIL%20-%20Miraflores!5e0!3m2!1ses-419!2spe!4v1766016984658!5m2!1ses-419!2spe"
                                width="100%"
                                height="300"
                                style={{ border: 0, maxWidth: '600px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Café Delicia"
                            ></iframe>
                        </div>

                        {/* Botón WhatsApp */}
                        <a
                            href="https://api.whatsapp.com/send/?phone=51914733376&text=Hola,%20quisiera%20información%20sobre%20Café%20Delicia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success mb-3"
                        >
                            💬 Escríbenos por WhatsApp
                        </a>

                        <p className="text-muted">
                            <i className="bi bi-telephone-fill me-2"></i>
                            +51 999 888 777
                        </p>
                        <p className="text-muted">
                            <i className="bi bi-envelope-fill me-2"></i>
                            info@callbackcoffee.pe
                        </p>
                        <p className="text-muted">
                            <i className="bi bi-clock-fill me-2"></i>
                            Lun-Dom: 8:00 AM - 10:00 PM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto