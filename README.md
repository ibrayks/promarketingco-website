# Página Web de Afiliación

Una página web moderna para promocionar productos de terceros y ganar comisiones a través de enlaces de afiliación.

## Características

✅ **Diseño Responsivo** - Funciona perfectamente en dispositivos móviles y de escritorio
✅ **Catálogo de Productos** - Muestra múltiples productos con detalles y enlaces de afiliación
✅ **Sistema de Favoritos** - Los usuarios pueden guardar productos favoritos
✅ **Búsqueda y Filtrado** - Funciones para encontrar productos específicos
✅ **Formulario de Contacto** - Para consultas de clientes
✅ **Optimizado para SEO** - Estructura semántica correcta

## Estructura del Proyecto

```
affiliate-website/
├── index.html        # Página principal
├── styles.css        # Estilos CSS
├── script.js         # Funcionalidad JavaScript
└── README.md         # Este archivo
```

## Cómo Usar

### 1. Abrir la página
```bash
# Simplemente abre index.html en tu navegador
# O usa un servidor local:
python -m http.server 8000
# Luego accede a: http://localhost:8000
```

### 2. Agregar tus productos
Edita el array `productos` en `script.js` con tus enlaces de afiliación:

```javascript
const productos = [
    {
        id: 1,
        nombre: "Mi Producto",
        categoria: "Categoría",
        descripcion: "Descripción del producto",
        precio: "$99.99",
        rating: 4.5,
        imagen: "https://tu-imagen.jpg",
        enlaceAfiliado: "https://tu-enlace-afiliado.com"
    },
    // ... más productos
];
```

### 3. Personalizar la página
- Modifica los colores en `styles.css` (variables CSS)
- Cambia el nombre del sitio en `index.html`
- Actualiza los textos según tu marca

## Funciones JavaScript Disponibles

### `cargarProductos()`
Carga todos los productos en la página automáticamente.

### `agregarAlCarrito(productoId)`
Agrega un producto a la lista de favoritos (almacenada en localStorage).

### `buscarProductos(termino)`
Busca productos por nombre, descripción o categoría.
```javascript
const resultados = buscarProductos("laptop");
```

### `ordenarPorPrecio(orden)`
Ordena productos por precio (asc/desc).
```javascript
const ordenado = ordenarPorPrecio('asc');
```

### `obtenerEstadisticas()`
Devuelve estadísticas del catálogo.
```javascript
const stats = obtenerEstadisticas();
```

## Personalización Avanzada

### Cambiar colores principales
En `styles.css`, modifica las variables CSS:
```css
:root {
    --primary-color: #007bff;      /* Color principal */
    --secondary-color: #28a745;    /* Color secundario */
    --dark-color: #343a40;         /* Color oscuro */
    /* ... */
}
```

### Integración con API
Para cargar productos desde una API:

```javascript
async function cargarProductosDeAPI() {
    try {
        const response = await fetch('https://api.ejemplo.com/productos');
        const data = await response.json();
        // Procesar datos y renderizar
    } catch (error) {
        console.error('Error:', error);
    }
}
```

## Programas Afiliados Populares

- **Amazon Asociados** - https://asociados.amazon.com
- **CJ Affiliate** - https://www.cjaffiliates.com
- **Rakuten Advertising** - https://advertising.rakuten.com
- **ShareASale** - https://www.shareasale.com
- **Impact** - https://impact.com
- **Awin** - https://www.awin.com

## Consejos para Maximizar Comisiones

1. **Selecciona productos relevantes** para tu audiencia
2. **Crea contenido valioso** que eduque a los usuarios
3. **Usa enlaces con contexto** (no links descontextualizados)
4. **Actualiza regularmente** el catálogo de productos
5. **Optimiza para SEO** para atraer tráfico orgánico
6. **Mantén transparencia** sobre los enlaces afiliados
7. **Monitorea conversiones** y ROI constantemente

## Cumplimiento Legal

⚠️ **IMPORTANTE**: Debes cumplir con las regulaciones locales:
- Declarar claramente que utilizas enlaces de afiliación
- Mostrar tu política de privacidad
- Cumplir con FTC (USA), AEPD (España), GDPR (UE)
- Incluir términos de uso

## Mejoras Futuras

- [ ] Integración con base de datos
- [ ] Panel de administración
- [ ] Análisis y estadísticas
- [ ] Sistema de comentarios
- [ ] Newsletter/Email marketing
- [ ] Carrito de compras
- [ ] Wallet de comisiones

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**¡Buena suerte con tu negocio de afiliación!** 🚀
