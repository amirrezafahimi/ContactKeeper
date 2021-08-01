const express = require("express");
const router = express.Router();

// @router      GET api/contacts
// @description Get all users contacts
// @access      Public
router.get("/", (req, res) => {
    res.send("Get all contacts");
});

// @router      POST api/contacts
// @description add new contact
// @access      Private
router.post("/", (req, res) => {
    res.send("Add contact");
});

// @router      PUT api/contacts/:id
// @description update contact
// @access      Private
router.put("/:id", (req, res) => {
    res.send("update contact");
});

// @router      DELETE api/contacts/:id
// @description delete contact
// @access      Private
router.delete("/:id", (req, res) => {
    res.send("delete contact");
});

module.exports = router;