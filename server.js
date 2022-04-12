const express = require("express");
const routes = require("./routes/users.js");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");

require("dotenv").config();

// const express = require("express");
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('login.js');
// const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const app = express();


app.use(helmet());
app.use(compression()); //Compress all routes

app.use(cors({ origin: "https://ho1-login-api.herokuapp.com/" }));

app.use(express.json()); //parses incoming requests as JSON
app.use("/", routes);

//Index page (static HTML)
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
});


// server.use(middlewares);
// server.use(router);

//server.listen(port);