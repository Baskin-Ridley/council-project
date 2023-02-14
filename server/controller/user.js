const User = require("../model/user")

async function registerUser(req, res) {
    const data = req.body

    try {
        if (["username", "password"].every(key => Object.hasOwn(data, key))) {
            const user = await User.create(data)
            res.status(201).json({ message: "User succesfully registered" })
        } else {
            throw new Error("Invalid properties")
        }
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }
}

async function loginUser(req, res) {
    const data = req.body

    try {
        if (["username", "password"].every(key => Object.hasOwn(data, key))) {
            const token = await User.login(data)
            res.status(200).json({ message: "User login sucessfull", token: token })
        } else {
            throw new Error("Credentials are incorrect")
        }
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }
}



module.exports = {
    registerUser,
    loginUser
}
