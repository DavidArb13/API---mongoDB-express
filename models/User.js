const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let usersSchema = new Schema({
    username: {
        type: String,
        require: [true, "'User' is required"]
    },
    password: {
        type: String,
        require: [true, "'Password' is required"],
    },
    name: {
        type: String,
        required: [true, "The name is required for the hack in your acount of bank"]
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



module.exports = mongoose.model("users", usersSchema);

/*******************
 * Notas 
 *******************/

/*
Line 1:     Se requiere coneccion para crear el Schema
Line 3:     Crea variable Schema para guardar mongoose.Schema
Line 5:     Crea Schema es el documento
Line 29:    Aca exportamos el Schema que seria como el equivalente  una tabla (Documento) 

 */