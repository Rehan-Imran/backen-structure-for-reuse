"use strict";
const { Sequelize } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define(
    "childProgress",
    {
      id: {
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.DataTypes.STRING,
      },
      unit: {
        type: Sequelize.DataTypes.STRING,
      },
      date: {
        type: Sequelize.DataTypes.DATE,
      },
      value: {
        type: Sequelize.DataTypes.STRING,
      },
      time: {
        type: Sequelize.DataTypes.TIME,
      },
      features: {
        type: Sequelize.DataTypes.JSON,
      },
      childId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: "children",
            schema: "public",
          },
          key: "id",
        },
        allowNull: false,
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
