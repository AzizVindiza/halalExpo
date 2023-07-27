import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";



export const apiSlice = createApi({
    reducerPath : "apiSlice",
    baseQuery :fetchBaseQuery({baseUrl: process.env.REACT_APP_URL}),
    endpoints:(builder)=> ({
        addPartner: builder.mutation({
            query:(body)=>({
                url:"/application/",
                method:"POST",
                body
            })

        }),
        login : builder.mutation({
            query:(body) => ({
                url : "/login/",
                method : "POST",
                body
            })
        }),
        addFeedback: builder.mutation({
            query :(body) => ({
                url : "/feedback/",
                method : "POST",
                body
            })
        }),
        getMemberUser : builder.query({
            query : (arg) => ({
                url : `/user/${arg}`,
                method : "GET"
            })
        })
    })

})

export const {useAddPartnerMutation,useLoginMutation,useAddFeedbackMutation,useGetMemberUserQuery} = apiSlice