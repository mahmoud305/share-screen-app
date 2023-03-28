import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteVisitor, getVisitors } from "../../Services";

export const getUsersAction= createAsyncThunk("userSlice/getAllUsers",async(payload,thunkApi)=>{
   console.log("Heelo");
    const response= await getVisitors();
    console.log(response);
    thunkApi.dispatch(reinitializeVisitorsList(response));
    return response;
})

export const deleteVisitorAction= createAsyncThunk("userSlice/deleteVisitor",async(payload,thunkApi)=>{
     console.log(payload);
     const response= await deleteVisitor(payload);
     console.log(response);
     thunkApi.dispatch(removeVisitor(payload));
     return response;
 })
const userSlice= createSlice({
    name:"userSlice",
    initialState:[],
    reducers:{
        reinitializeVisitorsList:(state,action)=>{
            state= action.payload;
            return state;
        },
        addVisitor:(state,action)=>{
            console.log("in add");
            console.log(state);
            state.push(action.payload);
            return state;
        },
        removeVisitor:(state,action)=>{
            return  state = state.filter( (element)=> element.militaryNumber != action.payload   );
        }
    },
    extraReducers:{
        [getUsersAction.fulfilled]:(state,action)=>{
            console.log(action.payload);
            state=[...action.payload];
        }
    }
})

export default userSlice.reducer;
export const {addVisitor ,removeVisitor ,reinitializeVisitorsList}= userSlice.actions;
