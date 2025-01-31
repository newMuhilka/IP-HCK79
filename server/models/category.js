'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'AuthorId'
      })
      this.belongsTo(models.Type, {
        foreignKey: 'strCategory'
      })
    }
  }

  Category.init({

    strCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: ""
        },
        notEmpty: {
          args: true,
          msg: ""
        }
      }
    },

    strCategoryThumb: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          args: true,
          msg: "Please input a valid Url"
        },
        notNull: {
          msg: "Url for the thumbnail is required"
        },
        notEmpty: {
          args: true,
          msg: "Nice try there, unfortunately you can't just type some empty space here"
        }
      }
    },

    strCategoryDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: ""
        },
        notEmpty: {
          args: true,
          msg: ""
        }
      }
    },

  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};