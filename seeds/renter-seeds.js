const { Renter } = require('../models');

const renterData = [
    {
        renterName: 'Steve Mcqueen',
        email: 'CoolGuy@testemail.com',
        password: 'TCrown',
    },
    {
        renterName: 'Elroy Blues',
        email: 'Drytoast@testemail.com',
        password: 'MissionFromGod',
    },
    {
        renterName: 'Jeffery Lebowski',
        email: 'TheDude@testemail.com',
        password: 'TiestheRoomTogether',
    },
];

const seedRenter = () => Renter.bulkCreate(renterData);

module.exports = seedRenter;
