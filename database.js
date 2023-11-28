const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('postes', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});


async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testDatabaseConnection();

module.exports = sequelize;
