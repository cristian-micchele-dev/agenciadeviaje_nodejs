import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Configurar dotenv
dotenv.config();

// Función para verificar si la base de datos existe
async function verificarBaseDeDatos() {
    try {
        // Verificar si estamos en producción (Render)
        const isProduction = process.env.NODE_ENV === 'production';
        
        // Configuración de la conexión
        const config = {
            host: isProduction ? process.env.DATABASE_HOST : 'localhost',
            user: isProduction ? process.env.DATABASE_USER : 'root',
            password: isProduction ? process.env.DATABASE_PASSWORD : 'saionara123',
            database: isProduction ? process.env.DATABASE_NAME : 'agencia_viajes',
            port: isProduction ? parseInt(process.env.DATABASE_PORT) : 3306
        };

        // Primero conectamos sin especificar la base de datos
        const conexion = await mysql.createConnection({
            ...config
        });

        // Verificar si la base de datos existe
        const [rows] = await conexion.query('SHOW DATABASES LIKE ?', [config.database]);
        
        if (rows.length === 0) {
            console.log('La base de datos no existe. Creando...');
            await conexion.query(`CREATE DATABASE ${config.database}`);
            console.log('Base de datos creada exitosamente!');
        }

        // Cerrar la conexión temporal
        await conexion.end();

        // Ahora conectamos con la base de datos
        const conexionFinal = await mysql.createConnection(config);

        console.log('Conexión exitosa a la base de datos!', {
            host: config.host,
            database: config.database,
            port: config.port
        });
        return conexionFinal;
    } catch (error) {
        console.error('Error al verificar/conectar a la base de datos:', {
            message: error.message,
            code: error.code,
            errno: error.errno,
            sqlState: error.sqlState
        });
        throw error;
    }
}

export default verificarBaseDeDatos;  // Exporta la función en lugar de ejecutarla.
