const { Vehicle } = require('../models');

const vehicleData = [
    {
        vehicleName: 'McFly',
        vehicleMake: 'Delorean',
        vehicleModel: 'DMC-12 ',
        vehicleYear: 1981,
    },
    {
        vehicleName: 'Smokey',
        vehicleMake: 'Pontiac',
        vehicleModel: 'Trans Am',
        vehicleYear: 1977,
    },
    {
        vehicleName: 'Bullitt',
        vehicleMake: 'Ford',
        vehicleModel: 'Mustang',
        vehicleYear: 1968,
    },
    {
        vehicleName: 'Vanisher',
        vehicleMake: 'Dodge',
        vehicleModel: 'Challenger',
        vehicleYear: 1970,
    },
    {
        vehicleName: 'Blues',
        vehicleMake: 'Dodge',
        vehicleModel: 'Monaco',
        vehicleYear: 1974,
    },
    {
        vehicleName: 'Mirthmobile',
        vehicleMake: 'AMC',
        vehicleModel: 'Pacer',
        vehicleYear: 1976,
    },
    {
        vehicleName: 'Herbie',
        vehicleMake: 'Volkswagen',
        vehicleModel: 'Beetle',
        vehicleYear: 1963,
    },
    {
        vehicleName: 'Lebowski',
        vehicleMake: 'Ford',
        vehicleModel: 'Gran Torino',
        vehicleYear: 1973,
    },
    {
        vehicleName: 'Ectomobile',
        vehicleMake: 'Cadillac',
        vehicleModel: 'Meteor',
        vehicleYear: 1959,
    },
    {
        vehicleName: 'Christine',
        vehicleMake: 'Plymouth',
        vehicleModel: 'Fury',
        vehicleYear: 1958,
    },
];

const seedVehicle = () => Vehicle.bulkCreate(vehicleData);

module.exports = seedVehicle;
