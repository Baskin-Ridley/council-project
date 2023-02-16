const { Knowledge } = require("../model/knowledge");

async function createPostKnowledge(req, res) {


    const data = req.body;


    try {
        if (["content", "user_id",  "title"].every(key => Object.hasOwn(data, key))) {
            const post = await Knowledge.create(data)
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

async function deletePostKnowledge(req, res) {

    const data = parseInt(req.body.knowledge_id);

    try {

        const toDelete = await Knowledge.getById(data)
        console.log(toDelete)
        if (toDelete) {
            console.log("deleting")
            await Knowledge.destroy(data)
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


async function returnPostKnowledge(req, res) {

    try {
        const result = await Knowledge.showAll()
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}
module.exports = { createPostKnowledge, deletePostKnowledge, returnPostKnowledge }
