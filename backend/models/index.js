const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Adviser = require('./adviser')(sequelize, Sequelize);
const Service = require('./service')(sequelize, Sequelize);
const Booking = require('./booking')(sequelize, Sequelize);

// Associations
Adviser.hasMany(Service, { foreignKey: 'adviserId' });
Service.belongsTo(Adviser, { as: 'adviser' });

User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { as: 'user' });

Service.hasMany(Booking, { foreignKey: 'serviceId' });
Booking.belongsTo(Service, { as: 'service' });

module.exports = {
  sequelize,
  User,
  Adviser,
  Service,
  Booking
};
