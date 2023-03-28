import axios from 'axios';

const BaseUrl = "http://192.168.1.6:5000";

///////////////////////// Employees API
export async function getAllUsers(setFunction) {
    try {
      const response = await axios.get(`${BaseUrl}/getAllUsers`);
      let data = response.data.data;
      // console.log(users.data.data);
      setFunction(data);

    } catch (error) {
      console.log("error in getting all the users from frontend \n" + error);
    }
  };
export const addUserApi = async (user,allUsers) => {
    try {
        console.log(user);
        let result =await axios.post(`${BaseUrl}/addUser`, user);
        allUsers.push(user);
        return result;
    } catch (error) {
        console.log("error in adding user FE "+ error);

    }
}

///////////////////  Visitors API
export async function getVisitors(){
 try { 
   let response= await axios.get(`${BaseUrl}/getAllVisitors`);
   let data = response.data.data;
  //  setVisitors(data);
   return data;
  } catch (error) {
    console.log("error in getting Visitors\n"+error);
  } 
}

export const addVisitorApi = async (visitor) => {
  try {
      console.log(visitor);
      let result =await axios.post(`${BaseUrl}/addVisitor`, visitor);
      // allVisitors.push(visitor);
      return result;
  } catch (error) {
      console.log("error in adding user FE "+ error);
  }
}

export const deleteVisitor= async (id)=>{
  try {
    let result = await axios.delete(`${BaseUrl}/deleteVisitor/${id}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log("error in deleting visitor FE\n"+ error);
  }
}

//////////////////// Color API 

export async function getColorObjects(){
  try { 
    let response= await axios.get(`${BaseUrl}/getAllObjects`);
    let data = response.data.data;
   //  setVisitors(data);
    return data;
   } catch (error) {
     console.log("error in getting color Object FE \n"+error);
   } 
 }


export const addColorObjectApi = async () => {
  try {
      let result =await axios.post(`${BaseUrl}/addObject`);
      return result.data;
  } catch (error) {
      console.log("error in adding color Object FE "+ error);
  }
}


export const updateColorObjectApi = async (colors,index) => {
  try {
    console.log("in update");
    console.log( colors[index]); 
      let result =await axios.put(`${BaseUrl}/updateObject/${index}`,colors[index]);
      return result.data;
  } catch (error) {
      console.log("error in adding color Object FE "+ error);
  }
}



export const deleteColorObject= async (index)=>{
  try {
    let result = await axios.delete(`${BaseUrl}/deleteObject/${index}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log("error in deleting color Object FE\n"+ error);
  }
}