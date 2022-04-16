const {request,response} = require('express')

const getUsers = (req = request, res = response ) => {
    const {q,name,token} = req.query
    res.json({
        msg: 'API get | Controller',
        q,name,token
    });
}
const putUsers = (req, res = response) => {
    const {id} = req.params;
    res.json({
        msg: 'API put | Controller',
        id
    });
}
const postUsers = (req, res = response) => {
    const {name,age} = req.body

    res.json({
        msg: 'API post | Controller',
        name, age
    });
}
const deleteUsers = (req, res = response) => {
    res.json({
        msg: 'API delete | Controller'
    });
}
const patchUsers = (req, res = response) => {
    res.json({
        msg: 'API patch | Controller'
    });
}

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
    patchUsers,
}