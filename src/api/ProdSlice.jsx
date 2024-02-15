import {createSlice} from '@reduxjs/toolkit'
export const ProdSlice = createSlice({
    name:'Products',
    initialState:[],
    reducers:{
        update:(state,action)=>{
            state.push(action.payload)
        },
        delet:(state,action)=>{
            return state.filter(n=>n.id !== action.payload)
        }
    }
})
export let {update,delet} = ProdSlice.actions
export default ProdSlice.reducer