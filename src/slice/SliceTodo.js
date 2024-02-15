import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
export const fetchTodos = createAsyncThunk('name',async()=>{
    const name = await fetch('https://jsonplaceholder.typicode.com/todos')
    return name.json()
})
//commit added
const slice = createSlice({
    name:'slice',
    initialState:{
        isLoading: false,
        data:null,
        isError: false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchTodos.fulfilled ,(state,action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            state.isError = true
        })
    }
})
export default slice.reducer
