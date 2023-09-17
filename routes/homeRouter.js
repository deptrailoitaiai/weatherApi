const express = require("express");
const router = express.Router();
const mainRouter = require("../routes/mainRouter");
const homeControllers = require("../controllers/homeControllers");


router.get("/", (req, res) => {
  res.render("home", { css: "home.css", js: "home.js" });
});

router.post("/", async (req, res) => {
  const axiosData = await homeControllers.homeControllers(req, res);
  //console.log(axiosData); done
  req.session.confirmVariable = true;
  req.session.myData = axiosData;
  
  res.redirect(`/home/main`);
});

router.use("/main", mainRouter);

module.exports = router;
