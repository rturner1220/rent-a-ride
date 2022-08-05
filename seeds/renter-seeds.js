const { Renter } = require('../models');

const renterData = [
    {
        renterName: 'Steve Mcqueen',
        email: 'CoolGuy@testemail.com',
        password: 'TCrown',
        renter_id: 1,
    },
    {
        renterName: 'Elroy Blues',
        email: 'Drytoast@testemail.com',
        password: 'MissionFromGod',
        renter_id: 2,
    },
    {
        renterName: 'Jeffery Lebowski',
        email: 'TheDude@testemail.com',
        password: 'TiestheRoomTogether',
        renter_id: 3,
    },
];

const seedRenter = () => Renter.bulkCreate(renterData);

module.exports = seedRenter;
