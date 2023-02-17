const jwt = require("jsonwebtoken")
const User = require("../model/user")

const secureRoute = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            throw new Error("Missing headers")
        }
        console.log("secureRoute Headers true")
        const token = req.headers.authorization.replace("Bearer ", "")
        const payload = jwt.verify(token, process.env.SECRET)
        const userToVerify = await User.getById(payload.sub)
        if (!userToVerify) throw new Error("User not found")
        req.currentUser = userToVerify
        next()
    } catch (err) {
        res.status(401).json({ message: err })
    }
}

module.exports = secureRoute
