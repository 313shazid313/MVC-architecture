const express = require("express");
const { getUser, createUser } = require("../controllers/controlers");
const router = express.Router();

router.get("/users", getUser);

// app.use((req, res ,next )=>{
//     res.status(404).json({
//         message : "page not found" //! vul e onno kono route e gele ""page not found dakhabe
//     })
// })

router.post("/users",createUser);

module.exports = router;
