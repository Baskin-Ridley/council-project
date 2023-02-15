const { restart } = require("nodemon");
const {Event} = require("../db/event");

// get all events
async function getAllEvents(req, res) {
    try {
        const result = await Event.getAllEvents();
        res.status(200).json(result);
    } catch(err) {
        res.status(404).json({
            error: true,
            message: err.message
        });
    }
}

// create a new event
async function createEvent(req, res) {
    const data = req.body;
    
    try {
        if (["e_id", "e_name", "e_date", "e_time", "e_location"].every(key => Object.hasOwn(data, key))) {
            const post = await Event.create(data);
            res.status(201).json({message: "post created successfully"})
        } else {
            throw new Error("Invalid properties")
        }
    } catch(err) {
        res.status(404).json({
            error: true,
            message: err.message
        });
    }
}

module.exports = {
    getAllEvents,
    createEvent
};