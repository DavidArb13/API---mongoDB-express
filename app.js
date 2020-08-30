const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT | 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require("./controllers/Cars_Controllers"));
app.use(require("./controllers/Users_Controllers"));

app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`)
});


/***************************
 * Notas
 ***************************/
/*
Se importa el Express y se requiere 
se crea el puerto
se usan los controladores
y el body parser
*/