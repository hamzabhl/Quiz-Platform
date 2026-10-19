const express = require("express");
const router = express.Router();

const authMiddleware = require("../midleware/jwtMiddleware");
const { protection } = require("../controllers/protection");
router.get("/protection", authMiddleware, protection);

module.exports = router;