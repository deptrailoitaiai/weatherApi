const express = require("express");
const router = express.Router();

router.use("/home/main", (req, res, next) => {
  if (req.session.confirmVariable === true) {
    next();
  }
});

module.exports = router;
