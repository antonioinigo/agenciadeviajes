import { Testimonial } from '../models/Testimonial.js';

const guardarTestimonial=  async (req, res) => {

    //validar...

    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(!nombre) {
        errores.push({'mensaje': 'Agrega tu Nombre'})
    }
    if(!correo) {
        errores.push({'mensaje': 'Tu Correo es Obligatorio'})
    }
    if(!mensaje) {
        errores.push({'mensaje': 'Un Testimonial no puede ir vacio'})
    }

    if(errores.length > 0) {
        //muestra la vista con errores
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales,
        })
    }else{
        //almacenarlo en la base de datos

        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');

        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}