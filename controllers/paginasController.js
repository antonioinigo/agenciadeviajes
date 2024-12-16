import {Viaje} from '../models/Viaje.js';
import {Testimonial} from '../models/Testimonial.js';

const paginaIncio = async (req, res) => {
    
    const promises = [];

    promises.push(Viaje.findAll({
        limit: 3
    }));

    promises.push(Testimonial.findAll({
        limit: 3
    }));


    try {
        // pasar al promise
        const resultado =  await Promise.all(promises);

        console.log(resultado[0])

        res.render('inicio', {
            viajes : resultado[0],
            testimoniales: resultado[1],
            clase : 'home',
            page: 'Inicio',
        })
    } catch (error) {
        console.log(error);
    }

}


const paginaNostros= (req, res)=>{ //req: request, res: response
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes= async (req, res)=>{ //req: request, res: response
    //consultar la base de datos
    const viajes= await Viaje.findAll();


    res.render('viajes', {
        pagina: 'Viajes',
        viajes,
    });
};


const paginaTestimoniales= async(req, res)=>{ //req: request, res: response
    try{
        const testimoniales= await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimonios', testimoniales
        });
    }catch(error){
        console.log(error);
    }
    
    
};

const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne( { where : { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje', 
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaIncio,
    paginaNostros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje

}