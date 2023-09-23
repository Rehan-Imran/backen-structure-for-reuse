const express = require("express");
const bodyParser = require("body-parser");
// const { decodeToken, decodeUserToken } = require("./jwtAuthentication");
const dotenv = require("dotenv");
const HTTPError = require("./errors/HTTPerror");
const { registerUser } = require("./Auth/controller/controller");
dotenv.config();
const createValidator = require("./validations/validations");
const { userSchema } = require("./helper/authHelper/authHelper");
const { getActivityUnits } = require("./ActivityUnits/controller/controller");
const { STATUS_CODES, CONSTANTS } = require("../constants.json");

const validateUserDetails = createValidator(userSchema);

const app = express();
const port = process.env.SERVER_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,OPTIONS");
    res.set("Access-Control-Allow-Headers", "*");
    res.status(200).send();
  } else {
    next();
  }
});

app.post("/api/v1/register", validateUserDetails, async (req, res) => {
  try {
    const registerResponse = await registerUser(req.validatedData);
    res.status(registerResponse.code).json({ data: registerResponse });
  } catch (error) {
    console.log(error);
    res.status(error.code ?? 500).send(error.message);
  }
});

app.get("/api/v1/units", async (req, res) => {
  try {
    const registerResponse = await getActivityUnits(req.query);
    res.status(registerResponse.code).json({ data: registerResponse });
  } catch (error) {
    console.log(error);
    res.status(error.code ?? 500).send(error.message);
  }
});

app.listen(port, (error) => {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log(`Server running on port ${port}...`);
  }
});
