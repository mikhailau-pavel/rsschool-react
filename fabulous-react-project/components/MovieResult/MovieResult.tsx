import React, { ChangeEvent, FC, useState } from 'react';
import { useFetchAllTMoviesQuery } from '../../src/apiService/MovieServer';
import { useAppDispatch, useAppSelector } from '../../src/hooks/redux';
import MovieCard from '../MovieCard/MovieCard';
import { appSlice } from '../../src/store/reducers/AppReducer';
import Pagination from '../Pagination/Pagination';

const MovieResult: FC = () => {
  const { query, limit, page } = useAppSelector((state) => state.appReducer);
  const { data: response, isFetching } = useFetchAllTMoviesQuery({
    limit: limit,
    page: page,
    search: query,
  });
  const [totalItems, setTotalI] = useState(response?.data.movie_count);
  setTimeout(() => {
    const totalPage = response?.data.movie_count || 1;
    setTotalI(Math.ceil(totalPage / limit));
  }, 1000);

  const { changeLimit, setPageNumber } = appSlice.actions;
  const dispatch = useAppDispatch();

  const selectInputHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentValueLimit = e.currentTarget.value;
    dispatch(changeLimit(Number(currentValueLimit)));
    dispatch(setPageNumber(1));
  };
  return (
    <div>
      <span>Choose limit: </span>
      <select onChange={selectInputHandler}>
        <option value="5" defaultChecked>
          5
        </option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
      {!isFetching && <Pagination total={totalItems} />}
      {isFetching && <p>Searching...</p>}
      {!isFetching && !response?.data.movie_count && <p>Not results</p> }
      {!isFetching && response?.data.movie_count &&
        response?.data.movies.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
    </div>
  );
};
export default MovieResult;
