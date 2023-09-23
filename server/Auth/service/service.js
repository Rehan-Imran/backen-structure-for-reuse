const { generateOtp } = require("../../helper/authHelper/authHelper");
const { Parent } = require("../../models/index");

module.exports = {
  async checkUserExistence(email) {
    try {
      const data = await Parent.findOne({
        where: {
          email: email,
        },
      });
      if (data) {
        console.log(data, "data");
        return true;
      }
      return false;
    } catch (error) {
      //error field to be deecided
    }
  },

  async saveUserRegisterationDetails(details) {
    try {
      const response = await Parent.create(details);
      return response;
    } catch (error) {
      //error field to be deecided
    }
  },
};
