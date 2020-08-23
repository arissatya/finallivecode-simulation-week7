'use strict';
const { hashPasword } =  require('../helpers')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Inventory)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'email format only'
        },
        notEmpty: {
          args: true,
          msg: 'email must not empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password must not empty'
        }
      }
    }
  }, { hooks: {
    beforeCreate(user){
      user.password = hashPasword(user.password)
    }
  },
    sequelize,
    modelName: 'User',
  });
  return User;
};