import Swal from 'sweetalert2'

function MenuItem({ nombre, precio, descripcion, imagen }) {

    const handleOrdenar = () => {
        Swal.fire({
            icon: 'info',
            title: 'Opción en proceso',
            text: 'Esta funcionalidad estará disponible próximamente',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#FFD700'
        })
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
                <img
                    src={imagen}
                    className="card-img-top"
                    alt={nombre}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text text-muted">{descripcion}</p>
                    <p className="fw-bold text-success">S/ {precio}</p>
                    <button
                        className="btn btn-warning w-100"
                        onClick={handleOrdenar}
                    >
                        Ordenar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuItem