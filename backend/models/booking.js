module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  
    return Booking;
  };
  