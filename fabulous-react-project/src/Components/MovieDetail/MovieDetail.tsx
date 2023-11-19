import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { appSlice } from '../../store/reducers/AppReducer';
import movieAPI from '../../apiService/MovieServer';

const MovieDetail: FC = () => {
  const { id } = useParams();
  const { data: data, isLoading } = movieAPI.useFetchMovieByIdQuery(Number(id));
  const { closeDetails } = appSlice.actions;
  const dispatch = useAppDispatch();
  const closeSideSection = () => {
    dispatch(closeDetails());
  };

  return (
    <div>
      <button onClick={closeSideSection}>CLOSE</button>
      {!isLoading ? (
        <div>
          <h3>Title - {data?.data.movie.title}</h3>
          <p>URL - {data?.data.movie.url}</p>
          <p>Runtime - {data?.data.movie.runtime}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetail;
