import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";



export const apiSlice = createApi({
    reducerPath : "apiSlice",
    baseQuery :fetchBaseQuery({baseUrl: process.env.REACT_APP_REST}),
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
                url : `/user/user-participant/${arg}`,
                method : "GET"
            }),
        }),
        getNewsInNewsPage : builder.query({
            query : (arg) => ({
                url :"/other/news/",
                method : "GET"
            })
        }),
        getNewsMore : builder.query({
            query : (arg) => ({
                url :`/other/news/${arg}`,
                method : "GET"
            })
        })

    })

})

export const {useAddPartnerMutation,useLoginMutation,useAddFeedbackMutation,useGetMemberUserQuery,useGetNewsInNewsPageQuery,useGetNewsMoreQuery} = apiSlice