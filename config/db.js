import mysql from 'mysql2/promise';
import 'dotenv/config'

// Crea la conexión utilizando el módulo de promesas
async function conexionDB() {
    try {
        const conexion = await mysql.createConnection({
            host: process.env.BD_HOST,
            database: process.env.BD_NOMBRE,
            user: process.env.BD_USER,
            password: process.env.BD_PASSWORD,
            port: process.env.BD_PORT 
        });
        console.log('Conexión exitosa a la base de datos!');
        return conexion;  // Devuelve la conexión para ser usada en otras partes de la aplicación.
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error;  // Relanza el error para manejarlo más arriba o fallar si es necesario.
    }
}

export default conexionDB;  // Exporta la función en lugar de ejecutarla.




