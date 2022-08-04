const { Vehicle } = require('../models')

const vehicleData = [
    {
        vehicle_name: 'McFly',
        vehicleMake: 'Delorean',
        vehicleModel: 'DMC-12 ',
        vehicleYear: '1981',
    },
    {
        vehicle_name: 'Smokey',
        vehicleMake: 'Pontiac',
        vehicle_model: 'Trans Am',
        vehicleYear: '1977',
    },
    {
        vehicle_name: 'Bullitt',
        vehicleMake: 'Ford',
        vehicleModel: 'Mustang',
        vehicleYear: '1968',
    },
    {
        vehicle_name: 'Vanisher',
        vehicleMake: 'Dodge',
        vehicleModel: 'Challenger',
        vehicleYear: '1970',
    },
    {
        vehicle_name: 'Blues',
        vehicleMake: 'Dodge',
        vehicleModel: 'Monaco',
        vehicleYear: '1974',
    },
    {
        vehicle_name: 'Mirthmobile',
        vehicleMake: 'AMC',
        vehicleModel: 'Pacer',
        vehicleYear: '1976',
    },
    {
        vehicle_name: 'Herbie',
        vehicleMake: 'Volkswagen',
        vehicleModel: 'Beetle',
        vehicleYear: '1963',
    },
    {
        vehicle_name: 'Lebowski',
        vehicleMake: 'Ford',
        vehicleModel: 'Gran Torino',
        vehicleYear: '1973',
    },
    {
        vehicle_name: 'Ectomobile',
        vehicleMake: 'Cadillac',
        vehicleModel: 'Meteor',
        vehicleYear: '1959',
    },
    {
        vehicle_name: 'Christine',
        vehicleMake: 'Plymouth',
        vehicleModel: 'Fury',
        vehicleYear: '1958',
    }
]


const seedVehicle = () => Vehicle.bulkCreate(vehicleData);

module.exports = seedVehicle;