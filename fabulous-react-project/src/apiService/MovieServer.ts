import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface IMovie {
  url: string;
  id: number;
  title: string;
  runtime: number;
}

export interface ApiResponse {
  data: {
    limit: number;
    movie_count: number;
    movies: IMovie[];
    page_number: number;
  };
}
export interface ApiMovieResponse {
  data: {
    movie: IMovie;
  };
}

export interface FetchArgsType {
  limit: number;
  page: number;
  search: string;
}
const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://yts.mx' }),
  endpoints: (build) => ({
    fetchAllTMovies: build.query<ApiResponse, FetchArgsType>({
      query: ({ limit, page, search }: FetchArgsType) => ({
        url: `/api/v2/list_movies.json`,
        params: {
          limit: limit,
          page: page,
          query_term: search,
        },
      }),
    }),
    fetchMovieById: build.query<ApiMovieResponse, number>({
      query: (id) => ({
        url: `/api/v2/movie_details.json?movie_id=${id}`,
      }),
    }),
  }),
});

export default movieAPI;
