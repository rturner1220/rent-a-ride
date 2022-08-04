const router = require('express').Router();
const {Vehicle, Renter} = require('../../models');

//the api/vehicles endpoint
//access the vehicle model and find all vehicles
router.get('/', (req, res) => {
    Vehicle.findall({
        //can add attributes, but should pull all attributes since we're pulling the whole Vehicle model
        //include the associated renter
        include: [
            {
                model: Renter,
                //again, can include attributes but should pull all attributes since we're pulling the whole Renter model
            }
        ]
    })
    .then(dbVehicleData => res.json(dbVehicleData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    })
});

//find one vehicle by its id
router.get('/:id', (req, res) => {
    Vehicle.findOne({
        where: {
            id: req.params.id
        },
        //includes the associated Renters with the vehicle
        include: [
            {
                model: Renter
            }
        ]
    })
    .then(dbVehicleData => {
        if(!dbVehicleData) {
            res.status(404).json({ message: 'No vehicle was found with this id!'});
            return;
        }
        res.json(dbVehicleData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create a new vehicle
router.post('/', (req,res) => {
    Vehicle.create({
        id: req.body.id,
        vehicleMake: req.body.vehicleMake,
        vehicleModel: req.body.vehicleModel,
        vehicleYear: req.body.vehicleYear
    })
    .then(dbVehicleData => res.json(dbVehicleData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
