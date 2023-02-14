const fs = require("fs")
const client = require("./connection")

const userSchema = fs.readFileSync('./db/users.sql').toString()

const setupDatabase = async () => {
    await client.query(userSchema);
    console.log("Database created!")
}

setupDatabase()
