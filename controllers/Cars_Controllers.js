const express = require('express');
const app = express();
const Car = require("./../models/Cars");
const { errorServer, notFound, Success, troll } = require('./../utils/message');


/**********************
 * Endpoint GET:
 **********************/
app.get('/', function(req, res) {
    troll(res);
});

app.get('/car', function(req, res) {
    Car.find({}).exec((err, carList) => {
        if (err) {
            errorServer('', res);
        }
        if (!carList.length) {
            notFound('Searching the cars', res);
        }
        Success('The Cars', res, carList);
    });
});

app.get('/car/:id', function(req, res) {
    let id = req.params.id;
    Car.findById(id).exec((err, CarsId) => {
        if (err) {
            errorServer('could not connect', res);
        }
        Success('Congratulations is this ID', res, CarsId);
    });
});

/**********************
 * Endpoint POST:
 **********************/
app.post('/car', function(req, res) {
    let data = req.body
    let car = new Car(data);
    car.save((err, carDB) => {
        if (err) {
            errorServer('Has an error', res, err);
        }
        Success('The car has create', res, carDB);
    });
});

/**********************
 * Endpoint PUT:
 **********************/
app.put('/car/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;

    const { license_plate, number_registration, value, brand, model, color } = data;
    let actualizar = { license_plate, number_registration, value, brand, model, color };

    Car.findByIdAndUpdate(id, actualizar, { new: true, runValidators: true }, (err, carDB) => {
        if (err) {
            errorServer('Has an error', res, err);
        }
        Success('The Update is Success', res, carDB);
    });
});

/**********************
 * Endpoint DELETE:
 **********************/
app.delete('/car/delete/:id', function(req, res) {
    let id = req.params.id;
    Car.findByIdAndDelete(id).exec((err, carDB) => {
        if (err) {
            errorServer('Has an error', res, err);
        }
        if (!carDB) {
            notFound('has no Found for Delete', res);
        }
        Success('The Delete is Success', res, carDB);
    });
});

module.exports = app;

/**********************
 * Endpoint NOTAS:
 **********************/

/* 
se envia data directamente para resumir codigo si se requiere se hace una 
destructuracion

let car = new Cars({
license_plate: data.license_plate,
number_registration: data.number_registration,
value: data.value,
brand: data.brand,
model: data.model,
color: data.color,
})

Line 1:         Se necesita expess se importa para se usado 
Line 3:         se importa el modelo para poder tener interracion con el Schema

*/