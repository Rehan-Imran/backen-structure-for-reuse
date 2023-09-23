const { STATUS_CODES, CONSTANTS } = require("../../../constants");
const { encryptPassword } = require("../../helper/authHelper/authHelper");
const {
  checkUserExistence,
  saveUserRegisterationDetails,
} = require("../service/service");

module.exports = {
  async registerUser(registerationDetails) {
    try {
      const { email, password, confirmPassword } = registerationDetails;
      const existence = await checkUserExistence(email);
      if (existence) {
        return {
          message: CONSTANTS.ALREADY_EXIST,
          code: STATUS_CODES.FORBIDDEN,
        };
      }
      const userStatus = await saveUserRegisterationDetails({
        email,
        password: await encryptPassword(password),
        userStatus: "new",
      });
      if (userStatus?.dataValues?.email) {
        return {
          message: CONSTANTS.REGISTERATION_SUCCESSFUL,
          code: STATUS_CODES.SUCCESS,
        };
      }
    } catch (error) {
      // error field to be decided
    }
  },
};
