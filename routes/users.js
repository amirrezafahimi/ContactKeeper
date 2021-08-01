const express = require("express");
const router = express.Router();

// @router      POST api/users
// @description Register a user
// @access      Public
router.post("/", (req, res) => {
    res.send("Registers a user");
});

module.exports = router;