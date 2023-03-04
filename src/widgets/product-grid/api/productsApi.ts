import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "shared/api/customFetchBase";
import { IProduct } from "../types";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: customFetchBase,
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query() {
                return {
                    url: "product",
                    credentials: "include",
                };
            },
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;