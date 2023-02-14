const { Router } = require("express")
const { registerUser, loginUser } = require("../controller/user")
const secureRoute = require('../router/secureRouter')
const router = Router()



router.post("/register", registerUser)
router.post("/login", loginUser)


module.exports = router
