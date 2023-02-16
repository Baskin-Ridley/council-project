const { Router } = require("express");
const { createPostKnowledge, deletePostKnowledge, returnPostKnowledge } = require("../controller/knowledge")
const knowledgeRouter = Router()


knowledgeRouter.post("/create", createPostKnowledge)
knowledgeRouter.post("/delete", deletePostKnowledge)
knowledgeRouter.get("/", returnPostKnowledge)

module.exports = knowledgeRouter;
