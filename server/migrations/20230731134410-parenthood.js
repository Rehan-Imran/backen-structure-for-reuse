"use strict";

const { Parent } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("parents", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      streetAddress: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      zipCode: {
        type: Sequelize.INTEGER,
      },
      country: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      userStatus: {
        type: Sequelize.STRING,
      },
      maritalStatus: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("activities", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      progressType: {
        type: Sequelize.STRING,
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
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("children", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      timeOfBirth: {
        type: Sequelize.DATE,
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
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("childProgress", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.STRING,
      },
      unit: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      value: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.TIME,
      },
      features: {
        type: Sequelize.JSON,
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
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("chat", {
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
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("predefinedAcutivityUnits", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      unit: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  },
};
