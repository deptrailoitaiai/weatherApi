const express = require("express");
const ws = require("ws");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const session = require("express-session");
const app = express();
const bodyParser = require("body-parser");
const port = 3004;
const homeRouter = require("./routes/homeRouter");
const mainMiddleware = require("./middleware/mainMiddleware");
require("dotenv").config();

app.use(
  session({
    secret: `${process.env.SESSION_SECRET_KEY}`,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static("public/css"));
app.use(express.static("public/js"));

app.use(morgan("combined"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", mainMiddleware);

app.use("/home", homeRouter);

app.listen(port, (req, res) => {
  console.log("app listening at http://localhost:3004/home");
});
