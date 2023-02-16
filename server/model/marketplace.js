const client = require("../db/connection")

class Marketplace {



    constructor({ marketplace_id, posting_date, img_url, activity_date, user_id, isAvailable, content, title }) {

        this.marketplace_id = marketplace_id;
        this.posting_date = posting_date;
        this.img_url = img_url;
        this.activity_date = activity_date;
        this.user_id = user_id;
        this.isAvailable = isAvailable;
        this.content = content;
        this.title = title;

    }

    static async getById(id) {
        try {
            const response = await client.query("SELECT * FROM marketplace WHERE marketplace_id = $1;", [id])
            return response.rows[0]
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }
    }



    static async create(data) {

        if (!data) return ({
            error: true,
            message: "marketplace post is missing"
        })

        try {
            const response = await client.query("INSERT INTO marketplace(activity_date,user_id,content,title, img_url) VALUES ($1,$2,$3,$4,$5);", [data.activity_date, data.user_id, data.content, data.title, data.img_url])
            const check = await client.query("SELECT marketplace_id FROM marketplace WHERE user_id = $1 LIMIT 1", [data.user_id]).then()
            const updateUser = await client.query('UPDATE users SET job_id = array_append(job_id,$1) WHERE user_id = $2 ', [check.rows[0], data.user_id])
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }

    }

    static async showAll() {

        try {

            const response = await client.query("SELECT * FROM marketplace ORDER BY marketplace_id DESC")
            console.log(response.rows)
            return response.rows.map(m => new Marketplace(m))

        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }

    }

    static async destroy(id) {

        if (!id) return ({
            error: true,
            message: "marketplace post is missing"
        })

        try {
            console.log("inbetween")
            const response = await client.query("DELETE FROM marketplace * WHERE marketplace_id = $1;", [id])

        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }

    }




}

module.exports = { Marketplace };
