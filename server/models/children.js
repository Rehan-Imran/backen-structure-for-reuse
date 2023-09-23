"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define(
    "child",
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
      city: {
        type: Sequelize.DataTypes.STRING,
      },
      state: {
        type: Sequelize.DataTypes.STRING,
      },
      gender: {
        type: Sequelize.DataTypes.STRING,
      },
      image: {
        type: Sequelize.DataTypes.STRING,
      },
      timeOfBirth: {
        type: Sequelize.DataTypes.DATE,
      },
      parentId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: "parents",
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
        type: Sequelize.DATE,
      },
    },
    { underscored: false }
  );
};
