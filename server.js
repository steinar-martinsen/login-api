const express = require("express");
const jsonServer = require('json-server');
const server = jsonServer.create();
// const router = jsonServer.router('login.js');
// const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json()); //parses incoming requests as JSON
app.use("/", routes);

// server.use(middlewares);
// server.use(router);

//server.listen(port);