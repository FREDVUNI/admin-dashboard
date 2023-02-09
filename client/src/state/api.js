import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery:fetchBaseQuery({ 
        baseUrl: `${process.env.REACT_APP_BASE_URL}` 
    }),
    reducerPath: "AdminApi",
    tagTypes:["User","Products","Customers","Transactions","Geograpghy","Admins","Performance","Dashboard"],
    endpoints: (build) =>({
        getUser: build.query({
            query: (id) => `general/user/${id}`, 
            providesTags:["User"]
        }),
        getProducts: build.query({
            query: () => 'client/products',
            providesTags:["Products"]
        }),
        getCustomers: build.query({
            query: () => 'client/customers',
            providesTags:["Customers"]
        }),
        getTransactions: build.query({
            query:({ page,pageSize,sort,search }) =>({
                url:'client/transactions',
                method:'GET',
                params:{page,pageSize,sort,search}
            }),
            providesTags:["Transactions"]
        }),
        getGeography: build.query({
            query: () => 'client/geography',
            providesTags:["Geography"]
        }),
        getSales: build.query({
            query:() => 'sales/sales',
            providesTags:["Sales"]
        }),
        getAdmins: build.query({
            query:() => 'management/admins',
            provideTags:["Admins"]
        }),
        getPerformance: build.query({
            query:(id) => `management/performance/${id}`,
            provideTags:["Performance"]
        }),
        getDashboard: build.query({
            query:() => 'general/dashboard',
            providesTags:["Dashboard"]
        })
    })
})

export const { useGetUserQuery,useGetProductsQuery,useGetCustomersQuery,useGetTransactionsQuery,useGetGeographyQuery, useGetSalesQuery ,useGetAdminsQuery, useGetPerformanceQuery,useGetDashboardQuery } = api