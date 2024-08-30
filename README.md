# Agencia de Viajes - Backend

Este es el backend del proyecto **Agencia de Viajes**, una aplicación web que permite a los usuarios explorar y reservar diferentes destinos turísticos. El backend está construido con Node.js y MySQL, ofreciendo las rutas y controladores necesarios para gestionar la base de datos, así como la lógica de la aplicación.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework minimalista para construir aplicaciones web y APIs en Node.js.
- **MySQL**: Base de datos relacional utilizada para almacenar la información de los viajes y testimonios.
- **Pug**: Motor de plantillas para renderizar vistas dinámicas.
- **dotenv**: Gestión de variables de entorno para manejar configuraciones sensibles.

## Funcionalidades Principales del Backend

1. **Gestión de viajes**: El backend incluye rutas para mostrar la información de los viajes, incluyendo el destino, descripción, precio y más.
2. **Gestión de testimoniales**: Los usuarios pueden dejar sus testimonios, que son almacenados en la base de datos y mostrados en la página.
3. **Conexión a la base de datos**: El backend se conecta a una base de datos MySQL utilizando la librería `mysql2`, con un sistema de configuración segura a través de variables de entorno.
4. **Middleware personalizado**: Se añade middleware para pasar el año actual y el nombre del sitio a todas las vistas renderizadas, haciendo más dinámico el contenido de la página.
5. **Estructura organizada**: El código está dividido en rutas, controladores y vistas, lo que facilita su mantenimiento y escalabilidad.

## Configuración del Proyecto

### Requisitos Previos

- Node.js
- MySQL

### Instalación

1. Clona este repositorio.
2. Instala las dependencias del proyecto:
   ```bash
   npm install
