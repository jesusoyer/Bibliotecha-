const seedExample = require('./example-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedExample();
    console.log('\n----- EXAMPLE SEEDED -----\n');

    process.exit(0);
};

seedAll();