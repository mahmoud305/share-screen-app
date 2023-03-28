const Employee = require("../Employees/Employee");
// const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../../DB/visitorsDB.json"); // to get database file path correctly
const {checkEmployeeExist,getFileData,addDataToFile,sortArray,sendResponse} = require("../HelpFunctions/HelpFunctions");


const getAllVisitors = (req, res) => {
    try {
        const visitors = getFileData(dbPath)
        sendResponse(res, "Api Working Correctly", visitors);
    } catch (error) {
        sendResponse(res, "error in getAllUsers\n" + error, [], false)
    }
};

const addVisitor = (req, res) => {
    const { name, rank, militaryNumber, img } = req.body;

    const newEmp = new Employee(rank, name, militaryNumber, img);
    let emp = checkEmployeeExist(militaryNumber,dbPath);
    if (emp) {
        sendResponse(res, `user with the military number ${militaryNumber} already exist in the list`, [], false);
    } else {
        try {
            const fileData = getFileData(dbPath);
            fileData.push(newEmp);
            let result = addDataToFile(fileData,dbPath,false);
            // fs.writeFileSync(dbPath, JSON.stringify(fileData));
            if (result)
                sendResponse(res, "user added successfully", fileData);
            else
                sendResponse(res, "error in adding user to the visitors List", [], false);

        } catch (error) {
            sendResponse(res, "error in adding Vistor \n " + error, [], false);
        }
    }

}

const deleteVisitor = (req, res) => {
    const { id } = req.params;
    try {
        const visitor = checkEmployeeExist(id,dbPath);
        if (visitor) {
            let visitors = getFileData(dbPath);
            console.log(visitors);
            visitors = visitors.filter((emp) => emp.militaryNumber != id);
            console.log(visitor);
            let result = addDataToFile(visitors,dbPath);
            console.log(result);
            if (result) {
                sendResponse(res, "user deleted successfully", visitors);
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

module.exports={ getAllVisitors ,addVisitor ,deleteVisitor};
