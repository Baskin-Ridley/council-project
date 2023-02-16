const { Event } = require("../model/event");

// get all events
async function showAll(req, res) {
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

module.exports = {showAll};