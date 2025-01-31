'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'UserId'
      })
      this.belongsTo(models.Type, {
        foreignKey: 'CategoryId'
      })
    }
  }
  Recipe.init({
    strMeal: DataTypes.STRING,
    strCategory: DataTypes.STRING,
    strMealThumb: DataTypes.STRING,
    strArea: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};