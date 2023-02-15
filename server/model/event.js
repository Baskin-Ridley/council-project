const client = require("../db/connection");

class Event {
    constructor(name, date, time, location) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.location = location;
    }

    static async showAll() {
        try {
            const response = await client.query("SELECT * FROM event;");
            console.log(response.rows);
            return response.rows.map(e => new Event(e));
        } catch (err) {
            return ({
                error: true,
                message: err.message
            });
        }
    }

    static async create(data) {
        if(!data) return ({
            error: true,
            message: "events are missing"
        })

        try {
            const response = await client.query("INSERT INTO events (name, date, time, location) VALUES ($1, $2, $3, $4)", [name, date, time, location]);
        } catch(err) {
            return ({
                error: true,
                message: err.message
            });
        }
        res.status(201).json({ message: "Event added successfully"});
    }
}

module.exports = Event;