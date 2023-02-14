const fs = require("fs")
const client = require("./connection")

const clientSchema = fs.readFileSync('./user.sql').toString()

const setupDatabase = async () => {
    await client.query(clientSchema);
    console.log("Database created!")
}

setupDatabase()
