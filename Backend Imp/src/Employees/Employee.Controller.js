const Employee = require("./Employee");
const fs = require("fs");
const path = require("path");
const {checkEmployeeExist,getFileData,addDataToFile,sortArray,sendResponse} = require("../HelpFunctions/HelpFunctions");

const dbPath = path.join(__dirname, "../../DB/myDB.json"); // to get database file path correctly

//////////////////////////  Help Functions

////////////////////////////// endPoint Functions
const getAllUsers = (req, res) => {
    try {
        const employees = getFileData(dbPath)
        sendResponse(res, "Api Working Correctly", employees);
    } catch (error) {
        sendResponse(res, "error in getAllUsers\n" + error, [], false)
    }
};


const addEmployee = (req, res) => {
    const { name, rank, militaryNumber, img } = req.body;

    const newEmp = new Employee(rank, name, militaryNumber, img);
    let emp = checkEmployeeExist(militaryNumber,dbPath);
    if (emp) {
        sendResponse(res, `user with the military number ${militaryNumber} already exist`, [], false);
    } else {
        try {
            const fileData = getFileData(dbPath);
            fileData.push(newEmp);
            let result = addDataToFile(fileData,dbPath);
            // fs.writeFileSync(dbPath, JSON.stringify(fileData));
            if (result)
                sendResponse(res, "user added successfully", fileData);
            else
                sendResponse(res, "error in adding user ", [], false);

        } catch (error) {
            sendResponse(res, "error in adding Employee \n " + error, [], false);
        }
    }

}

const deleteUser = (req, res) => {
    const { id } = req.params;
    try {
        const employee = checkEmployeeExist(id,dbPath);
        if (employee) {
            let employees = getFileData(dbPath);
            console.log(employees);
            employees = employees.filter((emp) => emp.militaryNumber != id);
            console.log(employee);
            let result = addDataToFile(employees,dbPath);
            console.log(result);
            if (result) {
                sendResponse(res, "user deleted successfully", employees);
            } else {
                sendResponse(res, "error in deleteing user ", [], false);
            }
        } else {
            sendResponse(res, `No user with military Number: (${id}) exist`, [], false);

        }

    } catch (error) {
        sendResponse(res, "error in deleting user \n " + error, [], false);
    }
}

const updateUser = (req, res) => {
    const { name, rank, militaryNumber, img } = req.body;
    const { id } = req.params;
    try {
        const employee = checkEmployeeExist(id,dbPath);
        if (employee) {
            let employees = getFileData(dbPath);
            employees = employees.map((emp) => {
                return emp.militaryNumber == id ?
                    {
                        name: name || emp.name, rank: rank || emp.rank,
                        militaryNumber: militaryNumber || emp.militaryNumber, img: img || emp.img
                    }
                    : emp;
            });
            addDataToFile(employees,dbPath);
            sendResponse(res, "user Updated successfully", employees);
        } else {
            sendResponse(res, `No user with military Number: (${id}) exist`, [], false);
        }
    } catch (error) {
        sendResponse(res, "error in updating user \n " + error, [], false);

    }
}
module.exports = { getAllUsers, addEmployee, deleteUser, updateUser };