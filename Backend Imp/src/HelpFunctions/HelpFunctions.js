const fs = require("fs");

function sendResponse(res, message, data, result = true) {
    res.json({ result, message, data });
}
function getFileData(filePath) {
    try {
        const employees = JSON.parse(fs.readFileSync(filePath));
        return employees;
    } catch (error) {
        console.log("error in retriving data from file");
        return error;
    }
}
function sortArray(data) {
    return sortedArray = data.sort((a, b) => (a.militaryNumber > b.militaryNumber) ? 1 :
    (a.militaryNumber < b.militaryNumber) ? -1: 0);
}
function addDataToFile(data ,filePath , sort=true) {
    try {

        let sortedDtata=  sort ? sortArray(data)  : data; // to keep the visitors list unsorted (FIFO)
         
        fs.writeFileSync(filePath, JSON.stringify(sortedDtata));
        return true;

    } catch (error) {
        console.log(" error in adding data to file \n " + error);
        return false;
    }
}

function checkEmployeeExist(militaryNumber,filePath) {
    try {
        const employees = getFileData(filePath);
        const employee = employees.find((emp) => emp.militaryNumber == militaryNumber)
        if (employee)
            return employee;
        else
            return null;
    } catch (error) {
        console.log("error in checking employee \n " + error);
    }
}


module.exports={checkEmployeeExist,getFileData,addDataToFile,sortArray,sendResponse}