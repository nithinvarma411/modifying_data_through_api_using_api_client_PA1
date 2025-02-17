const { createMenu, getMenu } = require("../controllers/menuController.js");
const express = require("express");

const router = express.Router();

router.route("/create").post(createMenu);
router.route("/get").get(getMenu);

module.exports = router;
