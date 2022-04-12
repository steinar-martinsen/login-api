const express = require("express");
const router = express.Router();
const login = require('@/login.js');
const data = require('@/db.json');


router.get("/login",login.validateLogin);
router.get("/data", data);