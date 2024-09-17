'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.products.belongsToMany(models.user, {through: 'orders'})
      // define association here
    }
  }
  products.init({
    productName: DataTypes.STRING,
    productDescription: DataTypes.STRING,
    productPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};