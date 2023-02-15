const Event = require("../model/library")

    async function create(req, res) {
    try {
        const data = req.body;
        const checkValues = ["title", "activity_date"].every(p => Object.hasOwn(data, p))
        if (checkValues) {
            const event = await Event.create(data);
            res.status(201).send(event);
        } else {
            res.status(404).json({
                error: "Event name must be entered"
            })
        }
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}
    async function destroy(req, res) {
    try {
        const date = req.params.date;
       
        await Event.destroy(date);
        res.status(204).end();
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}
async function show(req, res) {
    try {
        const events = await Event.getAll();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
}

module.exports = {
      create,  destroy, show
}
