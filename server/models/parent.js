"use strict";
const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "parent",
    {
      id: {
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
      },
      firstName: {
        type: Sequelize.DataTypes.STRING,
      },
      lastName: {
        type: Sequelize.DataTypes.STRING,
      },
      dateOfBirth: {
        type: Sequelize.DataTypes.DATE,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
      },
      phoneNumber: {
        type: Sequelize.DataTypes.STRING,
      },
      streetAddress: {
        type: Sequelize.DataTypes.STRING,
      },
      city: {
        type: Sequelize.DataTypes.STRING,
      },
      state: {
        type: Sequelize.DataTypes.STRING,
      },
      zipCode: {
        type: Sequelize.DataTypes.INTEGER,
      },
      country: {
        type: Sequelize.DataTypes.STRING,
      },
      gender: {
        type: Sequelize.DataTypes.STRING,
      },
      image: {
        type: Sequelize.DataTypes.STRING,
      },
      userStatus: {
        type: Sequelize.DataTypes.STRING,
      },
      maritalStatus: {
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    },
    { underscored: false }
  );
};
