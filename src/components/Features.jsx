function Features() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 about-title">
          <i className="bi bi-star-fill me-2" style={{color: '#FFD700'}}></i>
          ¿Por qué Callback Coffee?
        </h2>
        
        <div className="row g-4">
          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className="bi bi-lightning-charge-fill" style={{fontSize: '3rem', color: '#FFD700'}}></i>
              </div>
              <h4 className="mb-3">Rápido y Eficiente</h4>
              <p className="text-muted">
                Como un buen callback, siempre estamos listos para atenderte. 
                Tu café en minutos, sin esperas largas.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className="bi bi-award-fill" style={{fontSize: '3rem', color: '#FFD700'}}></i>
              </div>
              <h4 className="mb-3">Calidad Premium</h4>
              <p className="text-muted">
                Granos 100% peruanos de las mejores regiones cafetaleras. 
                Cada taza es una obra maestra.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className="bi bi-heart-fill" style={{fontSize: '3rem', color: '#FFD700'}}></i>
              </div>
              <h4 className="mb-3">Hecho con Pasión</h4>
              <p className="text-muted">
                Nuestros baristas son artistas del café. Cada preparación 
                se hace con dedicación y amor.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className="bi bi-shield-check" style={{fontSize: '3rem', color: '#FFD700'}}></i>
              </div>
              <h4 className="mb-3">100% Natural</h4>
              <p className="text-muted">
                Sin aditivos ni conservantes. Solo café puro y auténtico 
                como debe ser.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className="bi bi-wifi" style={{fontSize: '3rem', color: '#FFD700'}}></i>
              </div>
              <h4 className="mb-3">WiFi Gratis</h4>
              <p className="text-muted">
                Perfecto para programadores y freelancers. Trabaja o estudia 
                mientras disfrutas tu café.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className="bi bi-geo-alt-fill" style={{fontSize: '3rem', color: '#FFD700'}}></i>
              </div>
              <h4 className="mb-3">Ubicación Céntrica</h4>
              <p className="text-muted">
                En el corazón de Lima. Fácil acceso y ambiente acogedor 
                para todos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features