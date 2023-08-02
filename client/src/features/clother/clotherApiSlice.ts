import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICategoryRes,
  IProductRes,
  ISectionByIdReq,
  ISectionByIdRes,
  ISectionRes,
  ISizeRes,
} from "./clotherType";

export const clotherApi = createApi({
  reducerPath: "clotherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    /* @Section */
    getAllSections: builder.query<ISectionRes[], void>({
      query: () => "sections",
    }),
    getSectionById: builder.query<ISectionByIdRes, ISectionByIdReq>({
      query: ({id, query}) => `/sections/${id}/?${query}`,
    }),
    getSectionByName: builder.query<ISectionRes, string>({
      query: (sectionName) => `/sections/name/${sectionName}`
    }),

    /* @Category */
    getAllCategories: builder.query<ICategoryRes[], void>({
      query: () => "categories",
    }),

    /* @Product */
    getCountOfProducts: builder.query<number, string | null>({
      query: (query) => `products/count/?${query}`,
    }),
    getAllProducts: builder.query<IProductRes[], string | null>({
      query: (query) => `products/?${query}`,
    }),
    getProductById: builder.query<IProductRes, string>({
      query: (id) => `products/${id}`
    }),

    /* @Sizes */
    getAllSizes: builder.query<ISizeRes[], void>({
      query: () => 'sizes'
    }),
    getSizeById: builder.query<ISizeRes, string>({
      query: (id) => `sizes/${id}`
    })
  }),
});

export const {
  useGetAllSectionsQuery,
  useGetSectionByIdQuery,
  useGetSectionByNameQuery,
  useGetAllCategoriesQuery,
  useGetCountOfProductsQuery,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetAllSizesQuery,
  useGetSizeByIdQuery
} = clotherApi;
