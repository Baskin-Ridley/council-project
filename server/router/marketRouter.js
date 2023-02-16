const { Router } = require("express")
const { createPostMarketplace, deletePostMarketplace, returnPostMarketplace } = require("../controller/marketplace")
const markRouter = Router()


markRouter.post("/create", createPostMarketplace)
markRouter.post("/delete", deletePostMarketplace)
markRouter.get("/", returnPostMarketplace)

module.exports = markRouter;
