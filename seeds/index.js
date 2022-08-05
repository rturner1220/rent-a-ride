const seedVehicle = require('./vehicle-seeds');
const seedRenter = require('./renter-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---- DATABASE SYNCED -----\n');

    await seedVehicle();
    console.log('\n-----VEHICLES SEEDED-----\n');
    
    
    await seedRenter();
    console.log('\n-----RENTERS SEEDED-----\n');

    process.exit(0);
};

seedAll();
