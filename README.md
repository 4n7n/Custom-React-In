# TaskMaster

## 📂 Estructura del Proyecto

```
taskmaster/
├── .vite/
├── node_modules/
├── public/
│   ├── vite.svg
├── src/
│   ├── components/
│   │   ├── Database/
│   │   │   ├── Database.jsx
│   │   │   └── Database.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── MapComponent/
│   │   │   ├── MapComponent.jsx
│   │   │   └── MapComponent.css
│   │   ├── NavBar/
│   │   │   ├── NavBar.jsx
│   │   │   └── NavBar.css
│   │   └── TaskForm/
│   │       ├── TaskForm.jsx
│   │       └── TaskForm.css
│   ├── hooks/
│   │   └── ApiHook.js
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── CHANGELOG.md
├── README.md
├── index.html
├── package-lock.json
└── package.json
```

TaskMaster es una aplicación moderna de gestión de tareas que combina la organización inteligente con visualización geoespacial.

## 🌟 Características

- 🗺️ **Gestión Geoespacial**: Visualiza y organiza tareas en un mapa interactivo
- 📊 **Análisis de Impacto**: Métricas visuales para priorización de tareas
- 🎨 **Diseño Moderno**: Interfaz oscura con efectos glassmorphism
- 📱 **Responsive**: Funciona en cualquier dispositivo
- 🔄 **Tiempo Real**: Actualizaciones instantáneas de estado
- 🎯 **Priorización**: Sistema inteligente de organización

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/4n7n/Custom-React-In

# Instalar dependencias
cd Custom-React-In
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🛠️ Tecnologías

- React 18
- Vite
- Leaflet para mapas
- Canvas para visualizaciones
- CSS Modules
- Lucide Icons

## 📦 Estructura del Proyecto

```
taskmaster/
├── src/
│   ├── components/
│   │   ├── NavBar/
│   │   ├── TaskForm/
│   │   ├── MapComponent/
│   │   ├── Database/
│   │   ├── Header/
│   │   └── Footer/
│   ├── styles/
│   ├── assets/
│   └── App.jsx
├── public/
└── package.json
```

## 🎯 Componentes Principales

### NavBar
Sistema de navegación responsive con modo oscuro.

### TaskForm
Gestión completa de tareas con:
- Creación y edición
- Asignación de prioridades
- Selección de ubicación
- Programación temporal

### MapComponent
Integración de mapas con:
- Visualización de tareas
- Selección de ubicaciones
- Gestión geoespacial

### Database
Sistema de base de datos con:
- Métricas de impacto
- Visualización radar
- Análisis de datos

## 🎨 Temas y Estilos

TaskMaster utiliza un sistema de temas basado en variables CSS:

## 📱 Responsive Design

La aplicación es completamente responsive con breakpoints en:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuración

### Variables de Entorno
```env
VITE_API_URL=your_api_url
VITE_MAP_KEY=your_map_key
```

### API
```javascript
const API_URL = "https://api.example.com/locations"; /*LeatFlet*/
```

## 📄 Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  }
}
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## 🙏 Agradecimientos

- [Leaflet](https://leafletjs.com/) - Mapas interactivos
- [Lucide Icons](https://lucide.dev/) - Iconografía
- [React](https://reactjs.org/) - Framework frontend