const router = require('express').Router();
const { Renter, Vehicle} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage');
});

//route to login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/vehicle');
        return;
    }
    res.render('login');
});


//route to rental page
router.get('/vehicle', (req,res) => {
    Vehicle.findAll({
        attributes: [
            'id',
            'vehicle_name',
            'vehicle_make',
            'vehicle_model',
            'vehicle_year'
        ]
    })
    .then(dbVehicleData => {
        //pass a single vehicle object into the vehicle page
        const vehicles = dbVehicleData.map(vehicle => vehicle.get({plain: true}));
        res.render('vehicle', {vehicles});
    })
});

// router.get('/rental', (req, res) => {
//     Vehicle.findAll({

//     })
//     .then(dbVehicleData => {
//         const vehicles = dbVehicleData.map(vehicle => vehicle.get({plain:true}));
//         res.render('rental', {vehicles});
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// });

module.exports = router;
