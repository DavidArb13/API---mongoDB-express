const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let carsSchema = new Schema({
    license_plate: {
        type: String,
        require: [true, "'Licence Plate' is required"]
    },
    Number_registration: {
        type: String,
        require: [true, "'Number of Registration' is required"]
    },
    value: {
        type: Number,
        require: [true, "'Value' is required"]
    },
    brand: {
        type: String,
        require: [true, "'brand' is required"]
    },
    model: {
        type: String,
        require: [true, "'model' is required"]
    },
    color: {
        type: String,
        require: [true, "'Color' is required"]
    },
    create_at: {
        type: Date,
        require: [true, "'Create at' is required"],
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
})
module.exports = mongoose.model("cars", carsSchema);


/*******************
 * Notas 
 *******************/

/*
Line 1:     Se requiere coneccion para crear el Schema
Line 3:     Crea variable Schema para guardar mongoose.Schema
Line 5:     Crea Schema es el documento
Line 40:    Aca exportamos el Schema que seria como el equivalente  una tabla (Documento) 

 */