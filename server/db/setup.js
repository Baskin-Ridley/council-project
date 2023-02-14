const fs = require("fs")
const client = require("./connection")

const dbSchema = fs.readFileSync('./db/tableCreate.sql').toString()
const marketSchema = fs.readFileSync('./db/marketplace.sql').toString()

const setupDatabase = async () => {
    await client.query(dbSchema);
    await client.query(marketSchema);
    console.log("Database created!")
}

setupDatabase()
