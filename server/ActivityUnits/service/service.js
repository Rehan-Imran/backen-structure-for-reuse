const { ActivityUnits } = require("../../models/index");

module.exports = {
  async getActivityUnits(category) {
    try {
      let units = {};
      units = await ActivityUnits.findAll({
        where: category,
      });

      console.log(units, "units");
      return units;
    } catch (error) {
      // error field to be decided
    }
  },
};
