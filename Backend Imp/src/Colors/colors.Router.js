const { addColorObject, deleteColorObject, getColorObjects, updateColorsObject } = require("./colors.Controller");

const colorRouter = require("express").Router();
colorRouter.get("/getAllObjects", getColorObjects);
colorRouter.post("/addObject", addColorObject);
colorRouter.delete("/deleteObject/:index", deleteColorObject);
colorRouter.put("/updateObject/:index", updateColorsObject);

module.exports= colorRouter;
