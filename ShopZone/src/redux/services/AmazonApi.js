// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const amazonDataApi = createApi({
//   reducerPath: 'amazonDataApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://real-time-amazon-data.p.rapidapi.com',
//     prepareHeaders: (headers) => {
//       headers.set('X-RapidAPI-Key', '3a0e7fa15dmsh74d36bf0b58025ap11fab0jsn528a92ee82d5');
//       headers.set('X-RapidAPI-Host', 'real-time-amazon-data.p.rapidapi.com');

//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getProductOffers: builder.query({query: (params) => '/product-offers'}),

//     getProductSearch: builder.query({query: () => '/search?query=iPhone'}),

//     getProductReviews: builder.query({query: (params) => '/product-reviews'}),
//     getProductDetails: builder.query({query: (params) => '/product-details'}),
//     getProductCategoryList: builder.query({query: (params) => '/product-category-list'}),
//   }),
// });

// export const { 
//   useGetProductOffersQuery,

//   useGetProductSearchQuery,
  
//   useGetProductReviewsQuery,
//   useGetProductDetailsQuery,
//   useGetProductCategoryListQuery, 

// } = amazonDataApi;