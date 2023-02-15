const client = require("../db/connection")

class Marketplace {



    constructor({ marketplace_id, posting_date, img_url, activity_date, user_id, isAvailable, content }) {

        this.marketplace_id = marketplace_id;
        this.posting_date = posting_date;
        this.img_url = img_url;
        this.activity_date = activity_date;
        this.user_id = user_id;
        this.isAvailable = isAvailable;
        this.content = content;


    }

    static async getById(id) {
        try {
            const response = await client.query("SELECT * FROM marketplace WHERE id = $1;", [id])
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
            const response = await client.query("INSERT INTO marketplace(activity_date,user_id,content) VALUE ($1,$2,$3);", [data.activity_date, data.user_id, data.content])
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }

    }

    async delete(id) {

        if (!id) return ({
            error: true,
            message: "marketplace post is missing"
        })

        try {
            const response = await client.query("DELETE FROM marketplace * WHERE markeplace_id = $1;", [id])
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }


    }




}

module.exports = Marketplace;
