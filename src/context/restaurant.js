
import { qrApi } from "./api";

export const restaurantEndPoints = qrApi.injectEndpoints({
    endpoints: (build) => ({
        getRestaurantsList: build.query({
            query: (page) => `restaurant/restaurant_list/?page=${page}`,
            providesTags: ['restaurant'],
        }),
        getRestaurantDetail: build.query({
            query: (id) => `restaurant/restaurant_detail/${id}/`,
            providesTags: ['restaurant'],
        }),
        createRestaurant: build.mutation({
            query: (newRestaurant) => ({
                url: 'restaurant/create_restaurant/',
                method: 'POST',
                body: newRestaurant,
            }),
            invalidatesTags: ['restaurant'],
        }),
        updateRestaurant: build.mutation({
            query: ({ id, updatedData }) => ({
                url: `restaurant/update_restaurant/${id}/`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['restaurant'],
        }),
        deleteRestaurant: build.mutation({
            query: (id) => ({
                url: `restaurant/restaurant_delete/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['restaurant'],
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetRestaurantsListQuery,
    useGetRestaurantDetailQuery,
    useCreateRestaurantMutation,
    useUpdateRestaurantMutation,
    useDeleteRestaurantMutation,
} = restaurantEndPoints;
