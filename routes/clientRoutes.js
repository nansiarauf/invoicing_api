const express = require("express");
const { addClient } = require("../controllers/clientControllers");
const protectRoute = require("../middleware/userAuth");
const router = express.Router();

router.route("/addclient", protectRoute).post(addClient);

module.exports = router;
