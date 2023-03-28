const { checkEmployeeExist, getFileData, addDataToFile, sortArray, sendResponse } = require("../HelpFunctions/HelpFunctions");

const path = require("path");
const colors = { enter: "#3B71CA", wait: "#E4A11B", exit: "#DC4C64" }
const dbPath = path.join(__dirname, "../../DB/colorsDB.json"); // to get database file path correctly

const getColorObjects = (req, res) => {
    try {
        const colors = getFileData(dbPath)
        sendResponse(res, "ColorObjects Api Working Correctly", colors);
    } catch (error) {
        sendResponse(res, "error in getAllColors API\n" + error, [], false);
    }
};

const addColorObject = (req, res) => {
    try {
        const fileData = getFileData(dbPath);
        fileData.push(colors);
        let result = addDataToFile(fileData, dbPath, false);
        // fs.writeFileSync(dbPath, JSON.stringify(fileData));
        if (result)
            sendResponse(res, "colors Object added successfully", fileData);
        else
            sendResponse(res, "error in adding colors Object to the color List", [], false);

    } catch (error) {
        sendResponse(res, "error in adding colors Object \n " + error, [], false);
    }
}

const deleteColorObject = (req, res) => {
    const { index } = req.params;
    try {
        let visitors = getFileData(dbPath);
        if (index < visitors.length ) {
            console.log(visitors);
            visitors = visitors.filter((emp, currentIndex) => index != currentIndex);
            let result = addDataToFile(visitors, dbPath);
            console.log(result);
            if (result) {
                sendResponse(res, "ColorObject deleted successfully", visitors);
            } else {
                sendResponse(res, "error in deleteing ColorObject ", [], false);
            }
        } else {

        }
        sendResponse(res, `No ColorObject with index: (${index}) exist`, [], false);
    } catch (error) {
        sendResponse(res, "error in deleting ColorObject \n " + error, [], false);
    }
};


const updateColorsObject = (req, res) => {
    const { enter, wait, exit} = req.body;
    const { index } = req.params;
    try {
         
        let newColors = getFileData(dbPath);
        if (index < newColors.length) {
            newColors = newColors.map((emp,currentIndex) => {
                return currentIndex == index ?
                    { enter, wait, exit  }
                    : emp;
            });
            addDataToFile(newColors,dbPath);
            sendResponse(res, "ColorsObject Updated successfully", newColors);
        } else {
            sendResponse(res, `No ColorsObject with index  Number: (${index}) exist`, [], false);
        }
    } catch (error) {
        sendResponse(res, "error in updating ColorsObject \n " + error, [], false);

    }
}
module.exports = { addColorObject, deleteColorObject, getColorObjects,updateColorsObject };