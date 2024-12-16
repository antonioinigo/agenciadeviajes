import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';




//Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

const app = express();

const port= process.env.PORT || 4000;

//habilitar pug
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});

//agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//definiendo la carpeta publica

app.use(express.static('public'));


//agregar el router
app.use('/', router);


app.listen(port, () => {
    console.log(`el servidor esta corriendo en el puerto ${port}`);
});