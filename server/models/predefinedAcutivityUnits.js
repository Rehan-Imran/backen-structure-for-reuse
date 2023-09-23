"use strict";
const { Sequelize } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define(
    "predefinedAcutivityUnits",
    {
      id: {
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
      },
      unit: {
        type: Sequelize.DataTypes.STRING,
      },
      category: {
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
