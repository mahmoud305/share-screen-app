const { getAllVisitors, addVisitor, deleteVisitor } = require("./Visitors.Controller");

const visitorsRouter = require("express").Router();

visitorsRouter.get("/getAllVisitors", getAllVisitors);
visitorsRouter.post("/addVisitor",  addVisitor);
visitorsRouter.delete("/deleteVisitor/:id",deleteVisitor  );

module.exports= visitorsRouter;