import express from 'express';
import indexRouter from './routes/index.routes.js';
import conexionDB from './config/db.js'
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

// Configuración de Render
if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', true);
    app.use((req, res, next) => {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(`https://${req.headers.host}${req.url}`);
        }
        next();
    });
}

// Habilitar Pug como motor de vistas
app.set('view engine', 'pug');

//obtener el año actual
app.use((req,res,next)=> {
    const year = new Date() 
    res.locals.actualYear = year.getFullYear(); // con res.locals puedo pasar una variable a la vista.
    res.locals.nombresitio = 'Agencia de viajes'
    next();
})


// para leer los datos de un formulario
app.use(express.urlencoded({ extended: true }));

// definir la carpeta publica
app.use(express.static('public'))

// Rutas
app.use('/', indexRouter);


// Conectar a la base de datos antes de iniciar el servidor
conexionDB().then(() => {
    app.listen(port, host, () => {
        console.log(`Servidor iniciado en el puerto ${port}`);
    });
}).catch(error => {
    console.error('No se pudo conectar a la base de datos:', error);
    process.exit(1);  // Salir del proceso si no se puede conectar a la base de datos
});