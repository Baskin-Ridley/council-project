const { Router } = require("express")
const { createPostLandscape, deletePostLandscape, returnPostLandscape } = require("../controller/landscape")
const landRouter = Router()


landRouter.post("/create", createPostLandscape)
landRouter.post("/delete", deletePostLandscape)
landRouter.get("/", returnPostLandscape)

module.exports = landRouter;
