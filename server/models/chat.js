"use strict";
const { Sequelize } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define(
    "chat",
    {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      query: {
        type: Sequelize.STRING,
      },
      response: {
        type: Sequelize.STRING,
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
