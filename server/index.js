const app = require("./app")
const dotenv = require("dotenv").config();


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
}) 
