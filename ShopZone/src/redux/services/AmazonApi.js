import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const amazonDataApi = createApi({
  reducerPath: 'amazonDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://real-time-amazon-data.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '3a0e7fa15dmsh74d36bf0b58025ap11fab0jsn528a92ee82d5');
      headers.set('X-RapidAPI-Host', 'real-time-amazon-data.p.rapidapi.com');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProductOffers: builder.query({query: (params) => '/product-offers'}),

    //getProductsByGenre: builder.query({query: (searchTerm, genreListId) => `/search?query=${searchTerm}&category_id=${genreListId}`}),

    getProductsByGenre: builder.query({query: ({ searchTerm, genreListId }) => {return `/search?query=${searchTerm}&category_id=${genreListId}`;}}),
    
    getProductSearch: builder.query({query: (searchTerm) => `/search?query=${searchTerm}`}),

    getProductReviews: builder.query({query: (params) => `/product-reviews?asin=${params}`}),

    getProductDetails: builder.query({query: (params) => `/product-details?asin=${params}&country=US`}),
    
    getProductCategoryList: builder.query({query: (params) => '/product-category-list'}),

  }),
});

export const { 
  useGetProductOffersQuery,
  useGetProductsByGenreQuery,
  useGetProductSearchQuery,
  useGetProductReviewsQuery,
  useGetProductDetailsQuery,
  useGetProductCategoryListQuery, 

} = amazonDataApi;