# Agencia de Viajes

## Descripción
Sistema web completo para una agencia de viajes que permite gestionar y mostrar paquetes turísticos, testimonios de clientes y proporcionar información detallada sobre los destinos disponibles. La aplicación está desarrollada con Node.js y Express, utilizando MySQL como base de datos y Pug como motor de plantillas.

## Arquitectura del Sistema

### Backend
- **Framework**: Express.js
- **Base de datos**: MySQL
- **Motor de plantillas**: Pug
- **Manejo de variables**: dotenv
- **Middleware**: Express middleware

### Frontend
- **Plantillas**: Pug
- **Estilos**: CSS3
- **JavaScript**: Vanilla JS
- **Framework CSS**: Bootstrap

## Estructura del Proyecto

```
agencia-de-viajes/
├── config/
│   └── db.js           # Configuración de conexión a MySQL
├── controllers/
│   ├── paginascontrollers.js  # Controladores principales
│   └── testimonialController.js
├── public/
│   ├── css/
│   ├── js/
│   └── img/
├── routes/
│   └── index.routes.js  # Definición de rutas
├── views/
│   ├── layouts/
│   ├── partials/
│   └── páginas/
├── .env                 # Variables de entorno
├── .gitignore
├── index.js             # Punto de entrada
├── package.json
└── README.md
```

## Funcionalidades Principales

### Gestión de Viajes
- Listado de viajes disponibles
- Detalles de cada viaje
- Sistema de paginación
- Filtros y búsqueda

### Sistema de Testimoniales
- Visualización de testimonios
- Formulario para dejar testimonios
- Validación de datos
- Almacenamiento en base de datos

### Páginas del Sitio
- Página de inicio con destacados
- Sección "Nosotros"
- Catálogo de viajes
- Detalle de viajes
- Sección de testimoniales

## Base de Datos

La aplicación utiliza MySQL con las siguientes tablas principales:

- `viajes`: Almacena información sobre los paquetes turísticos
- `testimoniales`: Almacena los testimonios de los clientes

## Instalación y Configuración

1. **Requisitos Previos**
   - Node.js (versión 14 o superior)
   - MySQL Server
   - npm (Node Package Manager)

2. **Instalación**
   ```bash
   git clone https://github.com/cristian-micchele-dev/agenciadeviaje_nodejs.git
   cd agenciadeviaje_nodejs
   npm install
   ```

3. **Configuración de Base de Datos**
   - Crear una base de datos MySQL
   - Actualizar las credenciales en el archivo `.env`
   - Ejecutar los scripts SQL para crear las tablas

4. **Ejecución**
   ```bash
   # Modo desarrollo
   npm run dev
   
   # Modo producción
   npm start
   ```

5. **Acceso a la Aplicación**
   - Navegador: http://localhost:3000
   - API: http://localhost:3000/api

## Rutas API

### Endpoints

- `GET /` - Página de inicio
- `GET /nosotros` - Información de la agencia
- `GET /viajes` - Listado de viajes
- `GET /viajes/:slug` - Detalle de un viaje
- `GET /testimoniales` - Listado de testimoniales
- `POST /testimoniales` - Crear nuevo testimonio

## Seguridad

- Validación de datos en el frontend
- Sanitización de entradas
- Protección contra inyección SQL
- Variables de entorno para configuración sensible

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/NombreFuncionalidad`)
3. Realiza tus cambios
4. Realiza commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
5. Push a la rama (`git push origin feature/NombreFuncionalidad`)
6. Crea un Pull Request

## Licencia

ISC License

## Autor

Desarrollado por Cristian Micchele

## Soporte

<<<<<<< HEAD
Para reportar errores o solicitar características, por favor abre un issue en el repositorio de GitHub.
=======
Para reportar errores o solicitar características, por favor abre un issue en el repositorio de GitHub.
>>>>>>> d2899eaac531b1513e1c4f846c3814631650b684
