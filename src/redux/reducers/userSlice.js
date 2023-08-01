import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
        open : false,
    },
    reducers : {
        fillRegister: (state,action) => {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(state.user))
        },
        logOut : (state,action) => {
            state.user = {}
            localStorage.removeItem("user")
        },
        toggleModal : (state ,action) => {
            state.open = !state.open
        }

    }
})

export  const  {fillRegister,logOut,toggleModal} = userSlice.actions
export default  userSlice.reducer