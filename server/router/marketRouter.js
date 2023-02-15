const { Router } = require("express")
const { createPostMarketplace, deletePostMarketplace } = require("../controller/marketplace")
const secureRoute = require('../router/secureRouter')
const markRouter = Router()




module.exports = markRouter;
