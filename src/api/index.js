const { Router } = require("express");
const users = require("./routes/users");
const notes = require("./routes/notes");

const router = Router();

router.use("/users", users);
router.use("/notes", notes);

module.exports = router;
