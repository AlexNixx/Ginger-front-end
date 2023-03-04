import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "shared/api/customFetchBase";
import { IProduct } from "../types";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: customFetchBase,
    endpoints: (builder) => ({
        getProductById: builder.query<IProduct, string>({
            query: (id) => `product/${id}`,
        }),
    }),
});

export const { useGetProductByIdQuery } = productApi;