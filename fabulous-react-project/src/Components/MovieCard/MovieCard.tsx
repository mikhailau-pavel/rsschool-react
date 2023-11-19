import { FC } from "react";
import { IMovie } from "../../apiService/MovieServer";
import { useAppSelector } from "../../hooks/redux";

import { Link } from "react-router-dom";
interface MovieCardProps {
    movie: IMovie
}


const MovieCard: FC<MovieCardProps> = (props) => {

    const { movie } = props;
  const { limit, page, query } = useAppSelector((state) => state.appReducer);
  //const dispatch = useAppDispatch();
  //const { openDetails } = appSlice.actions;
  const openDetailHandler = () => {
   // dispatch(openDetails());
  };
  return (
    <div>
      <Link
        to={{
          pathname: `/detail/${movie.id}`,
          search: `page=${page}&limit=${limit}&query_term=${query}`,
        }}
      >
        <h3 onClick={openDetailHandler}>
          {movie.title}
        </h3>
      </Link>
    </div>
  );
}

export default MovieCard