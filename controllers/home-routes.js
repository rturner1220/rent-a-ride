const router = require('express').Router();
const { Renter, Vehicle } = require('../models');
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
router.get('/vehicle', withAuth, (req, res) => {
    Vehicle.findAll({
        raw: true,
        attributes: [
            'id',
            'vehicleName',
            'vehicleMake',
            'vehicleModel',
            'vehicleYear',
        ],
    }).then((dbVehicleData) => {
        //pass a single vehicle object into the vehicle page
        const vehicles = dbVehicleData;
        res.render('vehicle', { vehicles });
    });
});

module.exports = router;
