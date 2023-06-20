import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {}
    },
    reducers : {
        fillRegister: (state,action) => {
            state.user = action.payload
        }
    }
})

export  const  {fillRegister} = userSlice.actions
export default  userSlice.reducer