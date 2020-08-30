const express = require('express');
const app = express();
const User = require("./../models/User");
const { errorServer, notFound, Success, troll, exist } = require('./../utils/message')

/**********************
 * Funciones:
 **********************/


/**********************
 * Endpoint GET:
 **********************/
app.get('/', function(req, res) {
    troll(res);
})

app.get('/user/:username/:password', (req, res) => {
    let username = req.params.username
    let password = req.params.password

    User.find({ username, password }).exec((err, carVal) => {
        if (carVal.length) {
            success('Its True', res, carVal);
        }
        notFound('Its False', res);
    })
})

/**********************
 * Endpoint POST:
 **********************/
const findByUsername = ({ username }) => {
    User.find({ username }).exec((err, user) => {
        console.log(user);
        if (user.length) {
            return true;
        } else {
            return false;
        }
    })
}

app.post('/user', function(req, res) {
    let data = req.body;

    if (!findByUsername(data)) {
        let user = new User(data);
        user.save((err, UserDb) => {
            if (err) {
                errorServer('Has an error')
            }
            Success('The username has been save', res, UserDb);
        })
    } else {
        exist('is already exist', res);
    }
})

app.post('/user/login', (req, res) => {
    let data = req.body;
    const { username, password } = data;

    User.find({ username, password }).exec((err, carVal) => {

        if (!carVal.length) {
            return res.json({
                'success': false,
            })
        }
        return res.json({
            'success': true,
        })
    })
})

/**********************
 * Endpoint DELETE:
 **********************/
app.delete('/user/delete/:id', function(req, res) {
    let id = req.params.id;
    User.findByIdAndDelete(id).exec((err, userDB) => {
        if (err) {
            errorServer('Has an error', res, err);
        }
        if (userDB) {
            Success('The Delete is Success', res, carDB);
        }
        notFound('has no Found for Delete', res);
    });
});

/**********************
 * Endpoint PUT:
 **********************/
app.put('/car/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;

    const { username, password, name } = data;
    let actualizar = { username, password, name };

    Car.findByIdAndUpdate(id, actualizar, { new: true, runValidators: true }, (err, userDB) => {
        if (err) {
            errorServer('Has an error', res, err);
        }
        Success('The Update is Success', res, userDB);
    })
})

module.exports = app;

/**********************
 * Endpoint NOTAS:
 **********************/
/*

Line 10:        Probando No tiene utilidad en este caso 
Line 27:        Login por GET no recomendado 
Line 41:        validacion DE USUARIO NO REPETIDO con POST al agregar usuario NUEVO
Line 57:        Login por post
Line 86:        exportando app

*/