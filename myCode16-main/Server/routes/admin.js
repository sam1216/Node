const express = require("express");
const router = express.Router();
const fetchAdmin = require("../middleware/fetchAdmin");
const fetchUser = require("../middleware/fetchUser");
const getAllUser = require("../controller/authAdmin");

router.get("/getAllUser", fetchUser, fetchAdmin, getAllUser);

module.exports = router;