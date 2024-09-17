'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userfaves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userfaves.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userfaves',
  });
  return userfaves;
};