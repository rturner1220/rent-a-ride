const router = require('express').Router();
const sequelize = require('../config/connection');
const {Vehicle} = require("../models");

router.get('/rental', (req,res) => {
    Vehicle.findAll ({
    })
    .then(dbVehicleData => {
        const vehicles = dbVehicleData.map(vehicle => vehicle.get({plain: true}));
        res.render('rental', {vehicles, loggedIn: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;