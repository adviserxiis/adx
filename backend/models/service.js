module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define('Service', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    });
  
    return Service;
  };
  