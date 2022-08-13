const router = require('express').Router();

const vehicleRoutes = require('./vehicle-routes');
const renterRoutes = require('./renter-routes');


router.use('/vehicle', vehicleRoutes);
router.use('/renter', renterRoutes);



module.exports = router;

