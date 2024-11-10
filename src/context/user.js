
import { qrApi } from "./api";

export const userEndPoints = qrApi.injectEndpoints({
    endpoints: (build) => ({
        getWorkersByRestaurant: build.query({
            query: (restaurantName) => `user/worker_by_restaurant/?name=${restaurantName}`,
            providesTags: ['user'],
        }),
        registerUser: build.mutation({
            query: (newUser) => ({
                url: 'user/register/',
                method: 'POST',
                body: newUser,
            }),
            invalidatesTags: ['user'],
        }),
        loginUser: build.mutation({
            query: (body) => ({
                url: 'user/user/login/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['user'],
        }),
        updateUserProfile: build.mutation({
            query: ({ id, updatedData }) => ({
                url: `user/profile/update/${id}/`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['user'],
        }),
        createWorker: build.mutation({
            query: (newWorker) => ({
                url: 'user/workers/create/',
                method: 'POST',
                body: newWorker,
            }),
            invalidatesTags: ['user'],
        }),
        getCart: build.query({
            query: (page) => `user/get_cart/?page=${page}`,
            providesTags: ['cart'],
        }),
        addToCart: build.mutation({
            query: (item) => ({
                url: 'user/add_cart/',
                method: 'POST',
                body: item,
            }),
            invalidatesTags: ['cart'],
        }),
        deleteCartItem: build.mutation({
            query: (id) => ({
                url: `user/cart_delete/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['cart'],
        }),
        deleteUserProfile: build.mutation({
            query: (id) => ({
                url: `user/profile/delete/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['user'],
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetWorkersByRestaurantQuery,
    useRegisterUserMutation,
    useLoginUserMutation,
    useUpdateUserProfileMutation,
    useCreateWorkerMutation,
    useGetCartQuery,
    useAddToCartMutation,
    useDeleteCartItemMutation,
    useDeleteUserProfileMutation,
} = userEndPoints;
