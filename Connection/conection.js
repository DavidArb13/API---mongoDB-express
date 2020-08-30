const mongoose = require('mongoose')

/**********************
 * Conection DB Mongo
 ***********************/

mongoose.connect('mongodb://localhost/Daarb_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw `An error has occurred: ${ err }`;
    console.log("Connected to Daarb_db");
});



/**********************
 * Notas Conection
 ***********************/

/*
Line 1:      Se requiere Mongoose para coneccion
Line 10:     Validacion coneccion
*/