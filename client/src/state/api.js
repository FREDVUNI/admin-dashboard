import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery:fetchBaseQuery({ 
        baseUrl: `${process.env.REACT_APP_BASE_URL}` 
    }),
    reducerPath: "AdminApi",
    tagTypes:["User"],
    endpoints: (build) =>({
        getUser: build.query({
            query: (id) => `general/user/${id}`, 
            providesTags:["User"]
        }),
        getProducts: build.query({
            query: () => 'client/products',
            provideTags:["Products"]
        }),
        getCustomers: build.query({
            query: () => 'client/customers',
            provideTags:["Customers"]
        })
    })
})

export const { useGetUserQuery,useGetProductsQuery,useGetCustomersQuery } = api