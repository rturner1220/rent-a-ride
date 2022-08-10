const router = require('express').Router();
const sequelize = require('../config/connection');
const { Renter, Vehicle } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Vehicle.findAll({
        where: {
            //use the ID from the session
            renter_id: req.session.renter_id
        },
    })
        .then(dbRentalData => {
            if (dbRentalData) {
                res.render('rental',);
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// router.post('/', (req.res) => {
//     Vehicle.findOne({
//         where: {
//             vehicle_id: req.body.id
//         }

//     }
//     })

// })

module.exports = router;