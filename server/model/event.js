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
}

module.exports = Event;