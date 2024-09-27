'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {

  
    // static associate(models) {
      //  The `models/index` file will call this method automatically.
      
     static associate(models) {

       models.user.hasMany(models.order)
             //  models.user.belongsToMany(models.product, {through: 'order'})
      //  define association here
     }
   }
  
  
  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
