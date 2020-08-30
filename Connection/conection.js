const mongoose = require('mongoose')

/**********************
 * Conection DB Mongo
 ***********************/

mongoose.connect('mongodb://localhost/Daarb_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(db => console.log('Daarb_db is connected'))
    .catch(err => console.log(err));



/**********************
 * Notas Conection
 ***********************/

/*
Line 1:      Se requiere Mongoose para coneccion
Line 10:     Validacion coneccion
*/