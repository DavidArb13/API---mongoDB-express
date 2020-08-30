/***********************
 * Function Generics
 ***********************/

const errorServer = (msn, res, err) => {
    return res.json({
        message: `An error has ocurred ${msn}`,
        error: err.message
    });
}

const notFound = (msn, res) => {
    return res.send(`Not Found: ${msn}`);
}

const Success = (msn, res, doc) => {
    return res.json({
        Successful: `Succesfull ${msn}`,
        Document: doc
    });
}

const troll = (res) => {
    return res.send(`This is an API TROLL, you are Wellcome`);
}

const exist = (msn, res) => {
    return res.json({
        message: `${msn}`
    });
}

const updateStatus = (est, id, res, User) => {
    let data = { active: (est ? false : true) };
    User.findByIdAndUpdate(id, data, { new: false, runValidators: true }, (err, status) => {
        if (err) {
            errorServer('Failed', res, err);
        }
        if (!status) {
            notFound('Id for the update', res);
        }
        return Success('The status has been changed', res, status);
    });
}




module.exports = { errorServer, notFound, Success, troll, exist, updateStatus }

/***********************
 * Notas
 ***********************/

/*
Line 5:    Mensaje Error Servidor
line 12:   Mensaje No encontrado
line 16:   Mensaje Satisfactorio 
Line 23:   Mensaje Mensaje X
Line 33:   Mensaje cambio de estado de un usuario
 */