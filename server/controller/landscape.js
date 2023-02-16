const { Landscape } = require("../model/landscape");

async function createPostLandscape(req, res) {


    const data = req.body;


    try {
        if (["content", "user_id", "activity_date", "title"].every(key => Object.hasOwn(data, key))) {
            const post = await Landscape.create(data)
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

async function deletePostLandscape(req, res) {

    const data = parseInt(req.body.landscape_id);

    try {

        const toDelete = await Landscape.getById(data)
        console.log(toDelete)
        if (toDelete) {
            console.log("deleting")
            await Landscape.destroy(data)
            console.log("deleted")
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


async function returnPostLandscape(req, res) {

    try {
        const result = await Landscape.showAll()
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}

module.exports = { createPostLandscape, deletePostLandscape, returnPostLandscape }
