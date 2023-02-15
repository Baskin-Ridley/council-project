const {Event} = require("../db/event");

// get all events
async function getAllEvents() {
    const events = await Event.findAll();
    return events;
}

// create a new event
async function createEvent(eventData) {
    const event = await Event.create(eventData);
    return event;
}

module.exports = {
    getAllEvents,
    createEvent
};