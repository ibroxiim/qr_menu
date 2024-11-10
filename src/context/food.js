
import { qrApi } from './api';

export const foodEndpoints = qrApi.injectEndpoints({
    endpoints: (build) => ({
        getFoodCategoriesByRestaurant: build.query({
            query: (restaurantName) => `food/category_by_restaurant/?name=${restaurantName}`,
            providesTags: ['food'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetFoodCategoriesByRestaurantQuery } = foodEndpoints;
