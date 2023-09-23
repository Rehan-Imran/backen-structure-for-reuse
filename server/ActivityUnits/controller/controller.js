const { STATUS_CODES } = require("../../../constants");
const { getActivityUnits } = require("../service/service");

module.exports = {
  async getActivityUnits(category) {
    try {
      const units = await getActivityUnits(category);
      return { units: units, code: STATUS_CODES.SUCCESS };
    } catch (error) {
      // error field to be decided
    }
  },
};
