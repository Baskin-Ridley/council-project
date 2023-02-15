const Marketplace = require("../model/marketplace");

async function createPostMarketplace(req, res) {

    const data = req.body;

    try {
        if (["content", "user_id", "activity_date"].every(key => Object.hasOwn(data, key))) {
            const post = await Marketplace.create(data)
            res.status(201).json({ message: "post created successfully" })
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

async function deletePostMarketplace(req, res) {

    const data = req.body;

    try {
        if (["marketplace_id"].every(key => Object.hasOwn(data, key))) {
            const post = await Marketplace
            res.status(201).json({ message: "post created successfully" })
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
