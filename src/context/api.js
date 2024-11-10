import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const qrApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://qr-menu-api.ikramov.uz/' }),
    tagTypes: ['food, restaurant, user'],
    endpoints: () => ({}),
})