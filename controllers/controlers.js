const users = require ('../models/userModel')
const webForm = require('../views/userView')

exports.getUser =  (req, res) => {
    res.send(webForm); //!uses route e gele "OK!" dakhabe route => "http://localhost:8000/users"
}


exports.createUser =  (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age); //!age string k number e convert kora
    const user = {
      name,
      age, //! name ar age k akta user nam er object er moddhe hakha holo
    };
    users.push(user);
    res.status(201).json({
      success: true,
      users,
    });
  }