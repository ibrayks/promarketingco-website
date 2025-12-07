# ProMarketingCo — Sitio de Afiliación

[![Netlify](https://img.shields.io/badge/deploy-netlify-brightgreen)](https://regal-maamoul-056f7c.netlify.app)

Sitio de afiliación minimalista para promocionar productos y ganar comisiones.

Live demo: https://regal-maamoul-056f7c.netlify.app (ProMarketingCo)

## Características

- Diseño responsivo y moderno
- Catálogo de productos con enlaces de afiliación
- Sistema de favoritos (localStorage)
- Formulario de contacto simple

## Estructura del proyecto

```
promarketingco-website/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Uso rápido

1. Clona el repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador o ejecuta un servidor local:

```powershell
python -m http.server 8000
# luego abre http://localhost:8000
```

## Enlace en Netlify

El sitio está desplegado en Netlify en:

https://regal-maamoul-056f7c.netlify.app

Si quieres cambiar el nombre del sitio en Netlify a `promarketingco` o `ProMarketingCo`, usa la interfaz de Netlify o la CLI (ver instrucciones abajo).

## Cambiar el nombre del sitio en Netlify (instrucciones)

Opción web (fácil):

1. Entra a https://app.netlify.com y loguea.
2. Abre el sitio `regal-maamoul-056f7c` → Site settings → Site details → Change site name.

Opción CLI (si prefieres terminal):

```powershell
# instalar netlify-cli si no lo tienes
npm install -g netlify-cli
# loguea en Netlify (abrirá el navegador)
netlify login
# renombra el sitio (usa el site id o el nombre actual)
netlify sites:update regal-maamoul-056f7c --name promarketingco
```

> Nota: el nombre `promarketingco` debe estar disponible en Netlify para que la renombración funcione.

## Contribuciones y mejoras

Si quieres extender el proyecto: añade un panel de administración, carga productos desde una API o integra un sistema de analíticas.

---

**ProMarketingCo** — creada y desplegada con Netlify.
