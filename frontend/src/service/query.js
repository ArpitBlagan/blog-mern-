import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl='https://backend-k905.onrender.com/query'
export const queryApi=createApi({
    reducerPath:'query',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints(builder){
        return {
            addQuery:builder.mutation({
                query:(val)=>{
                    return{
                        url:`/${val.id}`,
                        method:'post',
                        body:{
                            message:val.message
                        },
                        credentials:"include"
                    }
                }
            }),
            deleteQuery:builder.mutation({
                query:(val)=>{
                    return {
                        url:`/${val.id}`,
                        method:'delete',
                        credentials:'include'
                    }
                }
            })
        }
    }
});
export const {useAddQueryMutation,useDeleteQueryMutation}=queryApi;