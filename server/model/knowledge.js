const { Client } = require("pg");
const client = require("../db/connection")

class Knowledge {



    constructor({ knowledge_id, posting_date, img_url, activity_date, user_id, content, title }) {

        this.knowledge_id = knowledge_id;
        this.posting_date = posting_date;
        this.img_url = img_url;
        this.activity_date = activity_date;
        this.user_id = user_id;
        this.content = content;
        this.title = title;

    }

    static async getById(id) {
        try {
            const response = await client.query("SELECT * FROM knowledge WHERE knowledge_id = $1;", [id])
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
            message: "knowledge post is missing"
        })

        try {
            const response = await client.query("INSERT INTO knowledge(user_id,content,title) VALUES ($1,$2,$3);", [data.user_id, data.content, data.title])
            const check = await client.query("SELECT knowledge_id FROM knowledge WHERE user_id = $1 LIMIT 1", [data.user_id]).then(client.query('UPDATE users SET job_id = array_append(job_id,$1) WHERE user_id = $2 ', [check.rows[0], data.user_id]))
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

            const response = await client.query("SELECT * FROM knowledge")
            //console.log(response.rows)
            return response.rows.map(m => new Knowledge(m))

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
            message: "knowledge post is missing"
        })

        try {

            const response = await client.query("DELETE FROM knowledge * WHERE knowledge_id = $1;", [id])
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }

    }




}

module.exports = { Knowledge };
