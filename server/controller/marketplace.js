const { Marketplace } = require("../model/marketplace");

async function createPostMarketplace(req, res) {


    const data = req.body;


    try {
        if (["content", "user_id", "activity_date", "title"].every(key => Object.hasOwn(data, key))) {
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

    const data = req.params.id;
    console.log(data)

    try {

        const toDelete = await Marketplace.getById(parseInt(data))
        const result = await

            res.status(204).json({ message: "post deleted successfully" })

    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}


async function returnPostMarketplace(req, res) {

    try {
        const result = await Marketplace.showAll()
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}

module.exports = { createPostMarketplace, deletePostMarketplace, returnPostMarketplace }
