# KIT Ecosocial Landing

Este proyecto está construido con **Nuxt 3** y permite:

- Soporte multidioma con rutas como `/es`, `/en`, etc.
- Cambio de idioma dinámico gestionado con **Vuex**.
- Carga dinámica de contenido y componentes desde archivos JSON en `/data/[langcode]/`.
- Los componentes se renderizan dinámicamente usando `<component :is="...">`.


## 🚀 Ejecutar el proyecto localmente

### Instalar dependencias
```bash
npm install
```

### Ejecutar en modo desarrollo
```bash
npm run dev
```

## 🔸 Despliegue en servidor propio (Node.js)

### Construye el proyecto
```bash
npm run build
```

### Ejecuta en modo producción
```bash
npm run start
```

## ✅ Requisitos

Node.js 18+
Nuxt 3
Vuex
