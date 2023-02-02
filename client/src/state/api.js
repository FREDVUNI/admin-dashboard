import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery:fetchBaseQuery({ 
        baseUrl: `${process.env.REACT_APP_BASE_URL}` 
    }),
    reducerPath: "AdminApi",
    tagTypes:["User","Products","Customers","Transactions","Geograpghy"],
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
        }),
        getTransactions: build.query({
            query:({ page,pageSize,sort,search }) =>({
                url:'client/transactions',
                method:'GET',
                params:{page,pageSize,sort,search}
            }),
            provideTags:["Transactions"]
        }),
        getGeography: build.query({
            query: () => 'client/geography',
            provideTags:["Geography"]
        })
    })
})

export const { useGetUserQuery,useGetProductsQuery,useGetCustomersQuery,useGetTransactionsQuery,useGetGeographyQuery } = api