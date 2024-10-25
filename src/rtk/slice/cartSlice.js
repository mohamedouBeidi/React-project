import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find(item => item.id === action.payload.id)
            console.log(findProduct)
            if(findProduct) {
                findProduct.quantity += 1;
                console.log(findProduct.quantity)
            } else {
                let productClone = {...action.payload, quantity: 1}
                state.push(productClone)
            }
            // state.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },
        clear: (state, action) => {
            return state = []
        }
    }
})

export const {addToCart, deleteFromCart, clear} = cartSlice.actions;
export default cartSlice.reducer;