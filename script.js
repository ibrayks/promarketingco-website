// Datos de cursos de Hotmart
// Enlaces de afiliado de Hotmart
const productos = [
    {
        id: 1,
        nombre: "Curso de Transformación Digital",
        categoria: "Negocios",
        descripcion: "Aprende a transformar tu negocio en la era digital. Desde estrategia hasta implementación práctica de herramientas modernas.",
        precio: "Acceso Completo",
        rating: 5,
        imagen: "https://via.placeholder.com/280x200?text=Curso+Digital",
        enlaceAfiliado: "https://go.hotmart.com/C103507398Q"
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
                    <a href="${producto.enlaceAfiliado}" target="_blank" class="btn btn-primary" title="Acceder al Curso en Hotmart">Acceder Ahora</a>
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
    const productosContainer = document.getElementById('productos-container');
    if (productosContainer) {
        cargarProductos();
    }
    
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
