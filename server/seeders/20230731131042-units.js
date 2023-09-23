"use strict";

const dotenv = require("dotenv");
const units = require("../predefinedUnits");
const activiti = require("../predefinedActivities");
dotenv.config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      return Promise.all(
        await queryInterface.bulkInsert(
          "predefinedAcutivityUnits",
          units.map((item) => {
            return { ...item, createdAt: new Date() };
          })
        ),
        await queryInterface.bulkInsert(
          "activities",
          activiti.map((item) => {
            return { ...item, createdAt: new Date() };
          })
        )
      );
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("predefinedAcutivityUnits", null, {});
  },
};
