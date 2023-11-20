import { FC } from 'react';
import { IMovie } from '../../apiService/MovieServer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { Link } from 'react-router-dom';
import { appSlice } from '../../store/reducers/AppReducer';
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
      <Link
        to={{
          pathname: `/detail/${movie.id}`,
          search: `page=${page}&limit=${limit}&query_term=${query}`,
        }}
      >
        <h3 onClick={openDetailHandler}>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
