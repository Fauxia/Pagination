import {configureStore} from '@reduxjs/toolkit'
import red from './Slice'
import product from '../api/ProdSlice'
import reduc from '../slice/SliceTodo'
export const store = configureStore({
    reducer:{
        humnava:red,
        prode:product,
        redic:reduc
    }
})