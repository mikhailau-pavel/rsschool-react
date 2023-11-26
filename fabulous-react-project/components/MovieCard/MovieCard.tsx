import React, { FC } from 'react';

import { IMovie } from '../../src/apiService/MovieServer';
import { useAppDispatch, useAppSelector } from '../../src/hooks/redux';
import { appSlice } from '../../src/store/reducers/AppReducer';
import Link from 'next/dist/client/link';
interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { movie } = props;
  const { limit, page, query } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();
  const { showDetails } = appSlice.actions;
  const openDetailHandler = () => {
    dispatch(showDetails());
  };
  return (
    <div>
      <Link href={`/${movie.id}?limit=${limit}&page=${page}&search=${query}`}>
      <h3 onClick={openDetailHandler}>{movie.title}</h3>

      </Link>
   
    </div>
  );
};

export default MovieCard;
