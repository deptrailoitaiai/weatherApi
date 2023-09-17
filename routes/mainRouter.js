const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/", (req, res) => {
  mainControllers.mainControllers_axious(req, res);
});

module.exports = router;
