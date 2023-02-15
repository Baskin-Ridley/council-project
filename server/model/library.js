const client = require("../db/connection")


class Event {
    constructor({ title, activity_date}) {
      this.title = title
      this.activity_date = activity_date
      
    }

    static async getAll() {
        const response = await client.query("SELECT * FROM library ;");
        return response.rows.map(g => new Event(g));
    }

    static async create(data) {
        let {title, activity_date} = data; 
        
        const response = await client.query("INSERT INTO library (title, activity_date) VALUES ($1, $2) RETURNING *;", [title, activity_date]);

        return response.rows.map(w => new Event(w))
    }

    static async destroy(date) {
        const response = await client.query("DELETE FROM library WHERE activity_date = $1 RETURNING *;", [date]);

        return new Event(response.rows[0]);
    }
    
    
    static async getOneByDate(date) {
        try {
          const response = await client.query("SELECT * FROM library WHERE activity_date = $1;", [date])
          return response.rows[0]
        } catch (err) {
          return ({
            error: true,
            message: err.message
          })
        }
      }

}


 



 module.exports = Event
