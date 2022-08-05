const seedVehicle = require('./vehicle-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---- DATABASE SYNCED -----\n');
    await seedVehicle();
    console.log('\n-----VEHICLES SEEDED-----\n');
};

seedAll();
