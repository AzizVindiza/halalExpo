import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
    },
    reducers : {
        fillRegister: (state,action) => {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(state.user))
        },
        logOut : (state,action) => {
            state.user = {}
            localStorage.removeItem("user")
        }
    }
})

export  const  {fillRegister,logOut} = userSlice.actions
export default  userSlice.reducer