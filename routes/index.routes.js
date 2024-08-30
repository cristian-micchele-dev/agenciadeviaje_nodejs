import express from 'express';

import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje} from '../controllers/paginascontrollers.js';
import { guardarTestimonal } from '../controllers/testimonialController.js';

const router = express.Router();


router.get('/', paginaInicio)


// Pasar una variable a la vista PUG

/* router.get('/nosotros', (req,res)=> {
    const viajes = 'Viajes a alemania'
    res.render('nosotros', {
        viajes
    })
})  */


router.get('/nosotros', paginaNosotros ) 

router.get('/viajes',paginaViajes) 

router.get('/viajes/:slug',paginaDetalleViaje) 


router.get('/testimoniales',paginaTestimoniales) 
router.post('/testimoniales', guardarTestimonal)


export default router;