// Datos de productos de Amazon seleccionados
// Reemplaza los enlaces de afiliado con tus propios códigos de afiliado de Amazon
const productos = [
    {
        id: 1,
        nombre: "Laptop Gaming Pro",
        categoria: "Electrónica",
        descripcion: "Laptop de alto rendimiento para gaming y trabajo profesional",
        precio: "$1,299.99",
        rating: 5,
        imagen: "https://via.placeholder.com/280x200?text=Laptop+Gaming",
        enlaceAfiliado: "https://www.amazon.com/s?k=gaming+laptop&tag=tucodigoafiliado"
    },
    {
        id: 2,
        nombre: "Monitor 4K Ultra",
        categoria: "Electrónica",
        descripcion: "Monitor 4K de 32 pulgadas con color profesional",
        precio: "$499.99",
        rating: 4.5,
        imagen: "https://via.placeholder.com/280x200?text=Monitor+4K",
        enlaceAfiliado: "https://www.amazon.com/s?k=4k+monitor&tag=tucodigoafiliado"
    },
    {
        id: 3,
        nombre: "Teclado Mecánico RGB",
        categoria: "Accesorios",
        descripcion: "Teclado mecánico personalizable con iluminación RGB",
        precio: "$149.99",
        rating: 4.8,
        imagen: "https://via.placeholder.com/280x200?text=Teclado+Mecanico",
        enlaceAfiliado: "https://www.amazon.com/s?k=mechanical+keyboard+rgb&tag=tucodigoafiliado"
    },
    {
        id: 4,
        nombre: "Mouse Inalámbrico Pro",
        categoria: "Accesorios",
        descripcion: "Mouse inalámbrico de precisión para trabajo y gaming",
        precio: "$79.99",
        rating: 4.6,
        imagen: "https://via.placeholder.com/280x200?text=Mouse+Inalambrico",
        enlaceAfiliado: "https://www.amazon.com/s?k=wireless+mouse&tag=tucodigoafiliado"
    },
    {
        id: 5,
        nombre: "Auriculares Bluetooth",
        categoria: "Audio",
        descripcion: "Auriculares inalámbricos con cancelación de ruido activa",
        precio: "$199.99",
        rating: 4.7,
        imagen: "https://via.placeholder.com/280x200?text=Auriculares+Bluetooth",
        enlaceAfiliado: "https://www.amazon.com/s?k=wireless+headphones+noise+cancelling&tag=tucodigoafiliado"
    },
    {
        id: 6,
        nombre: "Webcam 4K",
        categoria: "Electrónica",
        descripcion: "Webcam 4K con micrófono incorporado para streaming",
        precio: "$129.99",
        rating: 4.5,
        imagen: "https://via.placeholder.com/280x200?text=Webcam+4K",
        enlaceAfiliado: "https://www.amazon.com/s?k=4k+webcam&tag=tucodigoafiliado"
    },
    {
        id: 7,
        nombre: "Escritorio Ergonómico",
        categoria: "Muebles",
        descripcion: "Escritorio ajustable en altura para mayor comodidad",
        precio: "$349.99",
        rating: 4.4,
        imagen: "https://via.placeholder.com/280x200?text=Escritorio+Ergonomico",
        enlaceAfiliado: "https://www.amazon.com/s?k=adjustable+desk&tag=tucodigoafiliado"
    },
    {
        id: 8,
        nombre: "Silla Gaming",
        categoria: "Muebles",
        descripcion: "Silla gaming con soporte lumbar y reposacabezas",
        precio: "$299.99",
        rating: 4.6,
        imagen: "https://via.placeholder.com/280x200?text=Silla+Gaming",
        enlaceAfiliado: "https://www.amazon.com/s?k=gaming+chair&tag=tucodigoafiliado"
    }
];

// Función para crear las estrellas de rating
function crearEstrella(rating) {
    let estrellas = '';
    const ratingEntero = Math.floor(rating);
    const tieneMitad = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
        if (i < ratingEntero) {
            estrellas += '★';
        } else if (i === ratingEntero && tieneMitad) {
            estrellas += '½';
        } else {
            estrellas += '☆';
        }
    }
    return estrellas;
}

// Función para cargar productos en la página
function cargarProductos() {
    const contenedor = document.getElementById('productos-container');
    
    productos.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
            <div class="product-content">
                <div class="product-category">${producto.categoria}</div>
                <div class="product-name">${producto.nombre}</div>
                <div class="product-description">${producto.descripcion}</div>
                <div class="product-rating">${crearEstrella(producto.rating)} (${producto.rating})</div>
                <div class="product-price">${producto.precio}</div>
                <div class="product-footer">
                    <a href="${producto.enlaceAfiliado}" target="_blank" class="btn btn-primary" title="Comprar en Amazon">Comprar</a>
                    <button class="btn btn-secondary" onclick="agregarAlCarrito(${producto.id})" title="Agregar a favoritos">♥</button>
                </div>
            </div>
        `;
        contenedor.appendChild(productCard);
    });
}

// Función para agregar productos a favoritos (simulado)
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    if (!favoritos.find(p => p.id === productoId)) {
        favoritos.push(producto);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert(`✓ ${producto.nombre} agregado a favoritos`);
    } else {
        alert(`✓ Este producto ya está en favoritos`);
    }
}

// Manejar envío del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            contactForm.reset();
        });
    }
});

// Función para buscar y filtrar productos (opcional)
function buscarProductos(termino) {
    return productos.filter(p => 
        p.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(termino.toLowerCase()) ||
        p.categoria.toLowerCase().includes(termino.toLowerCase())
    );
}

// Función para ordenar productos por precio
function ordenarPorPrecio(orden = 'asc') {
    const copia = [...productos];
    copia.sort((a, b) => {
        const precioA = parseFloat(a.precio.replace('$', '').replace(',', ''));
        const precioB = parseFloat(b.precio.replace('$', '').replace(',', ''));
        return orden === 'asc' ? precioA - precioB : precioB - precioA;
    });
    return copia;
}

// Función para obtener estadísticas de productos
function obtenerEstadisticas() {
    return {
        total: productos.length,
        ratingPromedio: (productos.reduce((sum, p) => sum + p.rating, 0) / productos.length).toFixed(1),
        categorias: [...new Set(productos.map(p => p.categoria))],
        precioMin: Math.min(...productos.map(p => parseFloat(p.precio.replace('$', '').replace(',', '')))),
        precioMax: Math.max(...productos.map(p => parseFloat(p.precio.replace('$', '').replace(',', ''))))
    };
}
