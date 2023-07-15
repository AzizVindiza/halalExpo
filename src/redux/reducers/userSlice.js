import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {}
    },
    reducers : {
        fillRegister: (state,action) => {
            state.user = action.payload
        },
        logOut : (state,action) => {
            state.user = {}

        }
    }
})

export  const  {fillRegister,logOut} = userSlice.actions
export default  userSlice.reducer