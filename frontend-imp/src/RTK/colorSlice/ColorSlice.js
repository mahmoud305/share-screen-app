import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addColorObjectApi, deleteColorObject, getColorObjects, updateColorObjectApi, } from "../../Services";
const colors = { enter: "#3B71CA", wait: "#E4A11B", exit: "#DC4C64" }
export const getColorsAction = createAsyncThunk("colorsSlice/getAllColors", async (payload, thunkApi) => {
    console.log("Heelo");
    const response = await getColorObjects();
    console.log(response);
    thunkApi.dispatch(reinitializeColorsList(response));
    return response;
})
export const changeColorAction = createAsyncThunk("colorsSlice/changeColors",
    async (payload, thunkApi) => {
        let colors = [...thunkApi.getState().colors];
        const response = await updateColorObjectApi(colors, payload.index);
        // let newColors = thunkApi.dispatch(changeEnter(payload)); 
        console.log("WHATTT22");
        // console.log(newColors);
    })
export const AddColorObjectAction = createAsyncThunk("colorsSlice/addColorObject",
    async (payload, thunkApi) => {
        let response = await addColorObjectApi();
        thunkApi.dispatch(addObject());
    });
export const deleteColorObjectAction = createAsyncThunk("colorsSlice/deleteColorObject",
    async (payload, thunkApi) => {
        let response = await deleteColorObject(payload);
        thunkApi.dispatch(deleteObject(payload));
    });
const colorSlice = createSlice({
    name: "colorSlice",
    initialState: [],
    reducers: {
        reinitializeColorsList: (state, action) => {
            console.log("action");
            console.log(action.payload);
            state = action.payload;
            return state;
        },
        addObject: (state, action) => {
            state.push(colors);
            return state;
        },
        deleteObject: (state, action) => {
            state.pop(action.payload);
            return state;
        },
        changeEnter: (state, action) => {
            if (state[action.payload].enter == "#3B71CA")
                state[action.payload].enter = "#14A44D";
            else state[action.payload].enter = "#3B71CA";
            // action.payload.target.style.backgroundColor=state[0];
            // console.log(action.payload.target.style.backgroundColor);
            return state;
        },
        changeWaiting: (state, action) => {
            if (state[action.payload].wait == "#E4A11B")
                state[action.payload].wait = "#d4d804";
            else state[action.payload].wait = "#E4A11B";
            // action.payload.target.style.backgroundColor=state[0];
            // console.log(action.payload.target.style.backgroundColor);
            return state;
        },
        enterAll: (state, action) => {
            state.map((color) => color.enter = "#14A44D");
            return state;
        },
        waitAll: (state, action) => {
            state.map((color) => color.wait = "#d4d804");
            return state;
        },
        exitAll: (state, action) => {
            state.map((color) => color.wait = "#332D2D");
            return state;
        },

    },
    extraReducers: {
        [changeColorAction.fulfilled]: (state, action) => {
            console.log(state);
        }
    }

});

export default colorSlice.reducer;
export const { changeEnter, changeWaiting, addObject, deleteObject, enterAll, waitAll, exitAll, reinitializeColorsList } = colorSlice.actions;