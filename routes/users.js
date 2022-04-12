const express = require("express");
const router = express.Router();
const login = require('@/login.js');


router.get("/login",login.validateLogin);