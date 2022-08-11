const { Vehicle } = require('../models');

const vehicleData = [
    {
        id: 1,
        vehicleName: 'McFly',
        vehicleMake: 'Delorean',
        vehicleModel: 'DMC-12 ',
        vehicleYear: 1981,
    },
    {
        id: 2,
        vehicleName: 'Smokey',
        vehicleMake: 'Pontiac',
        vehicleModel: 'Trans Am',
        vehicleYear: 1977,
    },
    {
        id: 3,
        vehicleName: 'Bullitt',
        vehicleMake: 'Ford',
        vehicleModel: 'Mustang',
        vehicleYear: 1968,
    },
    {
        id: 4,
        vehicleName: 'Vanisher',
        vehicleMake: 'Dodge',
        vehicleModel: 'Challenger',
        vehicleYear: 1970,
    },
    {
        id: 5,
        vehicleName: 'Blues',
        vehicleMake: 'Dodge',
        vehicleModel: 'Monaco',
        vehicleYear: 1974,
    },
    {
        id: 6,
        vehicleName: 'Mirthmobile',
        vehicleMake: 'AMC',
        vehicleModel: 'Pacer',
        vehicleYear: 1976,
    },
    {
        id: 7,
        vehicleName: 'Herbie',
        vehicleMake: 'Volkswagen',
        vehicleModel: 'Beetle',
        vehicleYear: 1963,
    },
    {
        id: 8,
        vehicleName: 'Lebowski',
        vehicleMake: 'Ford',
        vehicleModel: 'Gran Torino',
        vehicleYear: 1973,
    },
    {
        id: 9,
        vehicleName: 'Ectomobile',
        vehicleMake: 'Cadillac',
        vehicleModel: 'Meteor',
        vehicleYear: 1959,
    },
    {
        id: 10,
        vehicleName: 'Christine',
        vehicleMake: 'Plymouth',
        vehicleModel: 'Fury',
        vehicleYear: 1958,
    },
];

const seedVehicle = () => Vehicle.bulkCreate(vehicleData);

module.exports = seedVehicle;
