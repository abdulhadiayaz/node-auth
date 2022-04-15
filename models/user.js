'use strict';
const {
  Model
} = require('sequelize');

const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob:{
      type: DataTypes.DATE,
      allowNull:false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull:false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  });
  return User;
};