const express = require("express");
const { checkApi, echoData } = require("../controllers/apiController");

const router = express.Router();

router.get("/", checkApi);
router.post("/echo", echoData);

module.exports = router;
