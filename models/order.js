'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     
     static associate(models) {
       // define association here
      //  models.product.belongsToMany(models.product, { through: "productorder" })
       models.order.belongsToMany(models.product, { through: "productorder" })
      //  models.order.belongsTo(models.users)
      //  models.order.hasMany(models.product)
       // models.order.belongsToMany(models.order, {through: 'productorder'})
     }
   }
   

  order.init({
    userId: DataTypes.INTEGER,
    orderComplete: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};