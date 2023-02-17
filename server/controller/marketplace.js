const { Marketplace } = require("../model/marketplace");

async function createPostMarketplace(req, res) {


    const data = req.body;

    //console.log(data)
    try {
        if (["content", "user_id", "img_url", "title"].every(key => Object.hasOwn(data, key))) {
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

    const data = parseInt(req.body.marketplace_id);

    try {

        const toDelete = await Marketplace.getById(data)
        //console.log(toDelete)
        if (toDelete) {
            //console.log("deleting")
            await Marketplace.destroy(data)
            //console.log("deleted")
            res.status(200).json({ message: "post deleted successfully" })
        } else {
            throw new Error("cannot locate post with this ID")
        }

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
