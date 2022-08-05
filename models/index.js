const Vehicle = require('./Vehicle');
const Renter = require('./Renter');

//Renter belongs to Vehicle
Renter.belongsTo(Vehicle, {
    foreignKey: 'renter_id'
});

//Vehicle belongs to Renter
Vehicle.belongsTo(Renter, {
    foreignKey: 'renter_id'
});

module.exports = { Vehicle, Renter};
