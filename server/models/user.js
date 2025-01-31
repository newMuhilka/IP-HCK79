'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Lodging, {
        foreignKey: 'UserId'
      });
    }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: {
        args: true,
        msg: "This username has been used! Come up with a different one!"
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email has been used! Use a different one!"
      },
      validate: {
        notNull: {
          msg: "Email must not be empty"
        },
        notEmpty: {
          args: true,
          msg: "Nice try there, unfortunately you can't just type some empty space here"
        },
        isEmail: {
          args: true,
          msg: "Please input a valid email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: "Password must be at least 5 characters long"
        },
        notNull: {
          msg: "Password must not be empty"
        },
        notEmpty: {
          args: true,
          msg: "Nice try there, unfortunately you can't just type some empty space here"
        }
      }
    },
    role: {
      type: DataTypes.ENUM,
      values: ['Staff', 'Admin'],
      defaultValue: 'Staff'
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          user.password = await hashPassword(user.password);
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          user.password = await hashPassword(user.password);
        }
      }
    }
  });
  return User;
};