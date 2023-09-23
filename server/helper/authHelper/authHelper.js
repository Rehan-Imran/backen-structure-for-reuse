const yup = require("yup");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function encryptPassword(plainPassword) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plainPassword, salt);
    return hash;
  } catch (error) {
    console.error("Error encrypting password:", error);
    throw error;
  }
}

async function comparePasswords(plainPassword, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw error;
  }
}

const generateOtp = () => {
  let digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
};

const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valied email")
    .required("Email is a required field"),
  password: yup.string().required("Password is required").min(6),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

module.exports = {
  userSchema: userSchema,
  generateOtp: generateOtp,
  encryptPassword: encryptPassword,
  comparePasswords: comparePasswords,
};
