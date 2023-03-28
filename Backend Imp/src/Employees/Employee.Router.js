const {getAllUsers , addEmployee, deleteUser, updateUser}= require("./Employee.Controller");
const employeeRouter = require("express").Router();

employeeRouter.get("/getAllUsers", getAllUsers);
employeeRouter.post("/addUser", addEmployee);
employeeRouter.delete("/deleteUser/:id", deleteUser);
employeeRouter.put("/updateUser/:id", updateUser);

module.exports= employeeRouter;