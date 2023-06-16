import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath : "apiSlice",
    baseQuery :fetchBaseQuery({baseUrl:"https://shark-app-65hkc.ondigitalocean.app/"}),
    endpoints:(builder)=> ({
        addPartner: builder.mutation({
            query:(body)=>({
                url:"application/",
                method:"POST",
                body
            })

        }),
        addUser: builder.mutation({
            query:(body)=>({
                url:"registration/",
                method:"POST",
                body
            })

        }),


    })

})

export const {useAddPartnerMutation,useAddUserMutation} = apiSlice