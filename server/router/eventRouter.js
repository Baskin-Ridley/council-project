const express = require("express");
const { getAllEvents, createEvent } = require("../controller/event");
const eventRouter = Router();

eventRouter.get("/", getAllEvents);
eventRouter.post("/create", createEvent);

module.exports = eventRouter;