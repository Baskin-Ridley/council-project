const client = require("../db/connection")
class Volunteer  {

    constructor({ user_id, activity_date}) {
    this.user_id = user_id
    this.activity_date = activity_date
    
    }
    static async create(data) {
       const id = data[0]
       const activity_date = data[1]
        // let {id, activity_date} = data; 
        const checkUser = await client.query("SELECT * FROM volunteers WHERE user_id= $1 AND activity_date= $2;", [id, activity_date]);
                
        if (checkUser.rowCount === 0){
            const response = await client.query("INSERT INTO volunteers (user_id, activity_date) VALUES ($1, $2) RETURNING *;", [id, activity_date]);

        return response.rows.map(w => new Volunteer(w))
    }else{
        return Error
    }
    
    
    }

}

module.exports = Volunteer
