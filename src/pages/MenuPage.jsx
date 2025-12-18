import MenuItem from '../components/MenuItem'


function Menu() {

    const cafes = [
        {
            id: 1,
            nombre: "Espresso Clásico",
            precio: 8.00,
            descripcion: "Café espresso intenso y aromático",
            imagen: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400"
        },
        {
            id: 2,
            nombre: "Cappuccino",
            precio: 10.00,
            descripcion: "Espresso con leche vaporizada y espuma",
            imagen: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400"
        },
        {
            id: 3,
            nombre: "Latte Vainilla",
            precio: 12.00,
            descripcion: "Café latte con toque de vainilla",
            imagen: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400"
        },
        {
            id: 4,
            nombre: "Americano",
            precio: 7.00,
            descripcion: "Espresso diluido con agua caliente",
            imagen: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400"
        },
        {
            id: 5,
            nombre: "Mocha",
            precio: 13.00,
            descripcion: "Espresso con chocolate y leche",
            imagen: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400"
        },
        {
            id: 6,
            nombre: "Café Frío",
            precio: 11.00,
            descripcion: "Cold brew refrescante con hielo",
            imagen: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400"
        }
    ]


    return (
        <div className="container py-5">
            <h2 className="text-center mb-5">Nuestro Menú</h2>
            <div className="row">
                {cafes.map((cafe) => (
                    <MenuItem
                        key={cafe.id}
                        nombre={cafe.nombre}
                        precio={cafe.precio}
                        descripcion={cafe.descripcion}
                        imagen={cafe.imagen}
                    />
                ))}
            </div>
        </div>
    )
}

export default Menu