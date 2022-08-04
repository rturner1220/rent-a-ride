const { Vehicle } = require('../models')

const vehicleData = [
    {
        vehicle_name: 'McFly',
        vehicle_make: 'Delorean',
        vehicle_model: 'DMC-12 ',
        vehicle_year: '1981',
    },
    {
        vehicle_name: 'Smokey',
        vehicle_make: 'Pontiac',
        vehicle_model: 'Trans Am',
        vehicle_year: '1977',
    },
    {
        vehicle_name: 'Bullitt',
        vehicle_make: 'Ford',
        vehicle_model: 'Mustang',
        vehicle_year: '1968',
    },
    {
        vehicle_name: 'Vanisher',
        vehicle_make: 'Dodge',
        vehicle_model: 'Challenger',
        vehicle_year: '1970',
    },
    {
        vehicle_name: 'Blues',
        vehicle_make: 'Dodge',
        vehicle_model: 'Monaco',
        vehicle_year: '1974',
    },
    {
        vehicle_name: 'Mirthmobile',
        vehicle_make: 'AMC',
        vehicle_model: 'Pacer',
        vehicle_year: '1976',
    },
    {
        vehicle_name: 'Herbie',
        vehicle_make: 'Volkswagen',
        vehicle_model: 'Beetle',
        vehicle_year: '1963',
    },
    {
        vehicle_name: 'Lebowski',
        vehicle_make: 'Ford',
        vehicle_model: 'Gran Torino',
        vehicle_year: '1973',
    },
    {
        vehicle_name: 'Ectomobile',
        vehicle_make: 'Cadillac',
        vehicle_model: 'Meteor',
        vehicle_year: '1959',
    },
    {
        vehicle_name: 'Christine',
        vehicle_make: 'Plymouth',
        vehicle_model: 'Fury',
        vehicle_year: '1958',
    }
]


const seedVehicle = () => Vehicle.bulkCreate(vehicleData);

module.exports = seedVehicle;