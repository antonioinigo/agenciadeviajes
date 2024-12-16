import express from 'express';
import { paginaIncio, paginaNostros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router= express.Router();

router.get('/', paginaIncio);

router.get('/nosotros', paginaNostros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);


export default router; //exportamos el router para poder utilizarlo en el archivo index.js