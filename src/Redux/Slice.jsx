import { createSlice } from "@reduxjs/toolkit";
export const sliceColor = createSlice({
    name:'changeColor',
    initialState:{color:''},
    reducers:{
        changeClr:(state,action)=>{
            state.color = action.payload
        }
    }
})
export let {changeClr} = sliceColor.actions
export default sliceColor.reducer