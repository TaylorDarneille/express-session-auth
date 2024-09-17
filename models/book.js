'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.book.belongsTo(models.user)
      models.book.hasMany(models.review)
      models.book.belongsToMany(models.user, {through: "userfaves"})
    }
  }
  book.init({
    bookTitle: DataTypes.STRING,
    bookId: DataTypes.STRING,
    bookImage: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};