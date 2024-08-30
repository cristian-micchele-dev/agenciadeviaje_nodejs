import conexionDB from "../config/db.js"

const paginaInicio = async(req,res)=> {
    
   const conexion = await conexionDB();
   const promiseDB = []
   
   // Para hacer multiples consultas
    promiseDB.push(conexion.query('SELECT * FROM viajes LIMIT 3'))
    promiseDB.push(conexion.query('SELECT * FROM testimoniales LIMIT 3'))

    try {
        // le paso el promise db
        const [viajes, testimoniales] = await Promise.all(promiseDB);
        
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: viajes[0], 
            testimoniales:testimoniales[0]
        })
    } catch (error) {
        console.error('Error al consultar la base de datos:', error.message);
        res.status(500).send('Error al obtener los datos');
    }
  
}

const paginaNosotros = (req,res)=> {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
    try {
        // Consultar la base de datos
        const conexion = await conexionDB();
        const [viajes] = await conexion.query('SELECT * FROM viajes');

        // Renderizar la vista y pasar los datos de los viajes
        res.render('viajes', {
            pagina: 'Proximos Viajes', // pasar esta variable a la vista
            viajes // Pasar los viajes de la base datos a la vista
        });

    } catch (error) {
        console.error('Error al consultar la base de datos:', error);
        res.status(500).send('Error al obtener los datos');
    }
};

const paginaTestimoniales =  async(req,res)=> {
    // Consultar la base de datos
    try {
        const conexion = await conexionDB();
        const [testimoniales] = await conexion.query('SELECT * FROM testimoniales');
        
        // Renderizar la vista y pasar los datos de los testimoniales
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales // Pasar los testimoniales de la base datos a la vista
        }) 

    } catch (error) {
        console.error('Error al consultar la base de datos:', error.message);
        res.status(500).send('Error al obtener los datos');
       
    }

  
}

// BOTON mas informacion , seria obtener por su ID
const paginaDetalleViaje = async(req,res)=> { 
    // en vez de viaje puede ser ID
    const {slug} = req.params;
    try {
        const conexion = await conexionDB();
        const [viaje] = await conexion.query('SELECT * FROM viajes WHERE slug=?', [slug]) // el viaje seria el id / el slug es el viaje
       
        res.render('viaje', {
            pagina: 'Informacion de Viaje',
            viaje: viaje[0] // para obtener el primer elemento.
        })
    

    } catch (error) {
        console.error('Error al consultar la base de datos:', error.message);
        res.status(500).send('Error al obtener los datos');
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}