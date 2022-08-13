const router = require('express').Router();
const { Vehicle, Renter } = require('../../models');

// get all renters
router.get('/', (req, res) => {
    Renter.findAll({
        attributes: { exclude: ['password'] },
    })
        .then(dbRenterData => res.json(dbRenterData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Renter.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Vehicle,
                attributes: [
                    'id',
                    'vehicleName',
                    'vehicleMake',
                    'vehicleModel',
                    'vehicleYear',
                ],
            },
        ],
    })
        .then(dbRenterData => {
            if (!dbRenterData) {
                res.status(404).json({
                    message: 'No renter found with this id',
                });
                return;
            }
            res.json(dbRenterData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Renter.create({
        renterName: req.body.renterName,
        email: req.body.email,
        password: req.body.password,
    })
        .then(dbRenterData => {
            req.session.save(() => {
                req.session.renter_id = dbRenterData.id;
                req.session.renterName = dbRenterData.renterName;
                req.session.loggedIn = true;

                res.json(dbRenterData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    console.log('request ', req.body)
    Renter.findOne({
        where: {
            email: req.body.email,
        },
    }).then(dbRenterData => {
        if (!dbRenterData) {
            res.status(400).json({
                message: 'No renter with that email address!',
            });
            return;
        }


        // const validPassword = dbRenterData.checkPassword(req.body.password);

        // if (!validPassword) {
        //     res.status(400).json({ message: 'Incorrect password!' });
        //     return;
        // }


        req.session.save(() => {
            req.session.renter_id = dbRenterData.id;
            req.session.renterName = dbRenterData.renterName;
            req.session.loggedIn = true;

            res.json({
                renter: dbRenterData,
                message: 'You are now logged in!',
            });
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;