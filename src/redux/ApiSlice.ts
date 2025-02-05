import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

const baseQuery = fetchBaseQuery({});

export const baseApiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

export const apiSlice = baseApiSlice
  .enhanceEndpoints({ addTagTypes: [] })
  .injectEndpoints({
    endpoints: (builder) => ({}),
  });
