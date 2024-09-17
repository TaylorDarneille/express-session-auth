'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.review.belongsTo(models.user)
      models.review.belongsTo(models.book)
    }
  }
  review.init({
    review: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    bookId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};