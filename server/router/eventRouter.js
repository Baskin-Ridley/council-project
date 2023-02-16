const { Router } = require("express");
const {showAll} = require("../controller/event");

const eventRouter = Router();

eventRouter.get("/event", showAll);

module.exports = eventRouter;