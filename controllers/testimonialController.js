import conexionDB from '../config/db.js'
const guardarTestimonal = async(req,res) => { 

    // validar formulario
    const {nombre,correo,mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: "EL mensaje esta vacio"})
    }

    if(correo.trim() === ''){
        errores.push({mensaje: "El correo esta vacio"})
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: "El mensaje esta vacio"})
    }

    // Mostramos la vista con errores
    if(errores.length > 0){
        // consultar los testimoniales existentes
        const conexion = await conexionDB()
        const [testimoniales] = await conexion.query('SELECT * FROM testimoniales');

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        try {
            // guardar en la base de datos
            const conexion = await conexionDB()
            await conexion.query('INSERT INTO testimoniales (nombre, correo, mensaje) VALUES (?, ?, ?)', [nombre, correo, mensaje]);
            res.redirect('/testimoniales'); // Redirige a la página de testimoniales después de guardar
        } catch (error) {
            console.error('Error al guardar el testimonio:', error.message);
            res.status(500).send('Error al guardar el testimonio');
        }
    }


}

export {
    guardarTestimonal
}