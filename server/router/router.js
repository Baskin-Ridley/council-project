const { Router } = require("express")

const { registerUser, loginUser, findById } = require("../controller/user")
const library = require("../controller/library")
const secureRoute = require('../router/secureRouter')
const router = Router()



router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/events", library.create)
router.delete("/events/:date", library.destroy)
router.get("/events", library.show)
router.post("/user", findById)

router.post("/volunteers", library.volunteer)


module.exports = router
