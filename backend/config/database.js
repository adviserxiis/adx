// config/database.js
// require('dotenv').config();

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('advisers', 'postgres', 'admin@124', {
    host: 'localhost',
    dialect: 'postgres',
  });

sequelize.authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

module.exports = sequelize;
