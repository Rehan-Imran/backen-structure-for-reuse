"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define(
    "activities",
    {
      id: {
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.DataTypes.STRING,
      },
      category: {
        type: Sequelize.DataTypes.STRING,
      },
      progressType: {
        type: Sequelize.DataTypes.STRING,
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
        allowNull: true,
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
