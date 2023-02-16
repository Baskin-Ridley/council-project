const fs = require("fs")
const client = require("./connection")

const userSchema = fs.readFileSync('./db/user.sql').toString()
const marketSchema = fs.readFileSync('./db/marketplace.sql').toString()
const librarySchema = fs.readFileSync('./db/library.sql').toString()
const knowledgeSchema = fs.readFileSync('./db/knowledge.sql').toString()
const landscapetSchema = fs.readFileSync('./db/landscape.sql').toString()
const seed = fs.readFileSync('./db/seed.sql').toString()
const clear = fs.readFileSync('./db/clear.sql').toString()


const setupDatabase = async () => {

    await client.query(clear);
    await client.query(userSchema);
    await client.query(marketSchema);
    await client.query(librarySchema);
    await client.query(knowledgeSchema);
    await client.query(landscapetSchema);
    await client.query(seed);
    console.log("Database created!")
}

setupDatabase()
