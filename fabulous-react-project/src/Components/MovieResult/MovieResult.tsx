import { ChangeEvent, FC } from "react"
import  movieAPI  from "../../apiService/MovieServer"
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import MovieCard from "../MovieCard/MovieCard";
import { appSlice } from "../../store/reducers/AppReducer";

const MovieResult: FC = () => {
    const { query, limit, page } = useAppSelector(
        (state) => state.appReducer,
      );
    const {data: response, isLoading} = movieAPI.useFetchAllTMoviesQuery({limit: limit, page: page, search: query})





  const { changeLimit, setPageNumber } = appSlice.actions;
  const dispatch = useAppDispatch();
  const selectInputHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentValueLimit = e.currentTarget.value;
    dispatch(changeLimit(Number(currentValueLimit)));
    dispatch(setPageNumber(1));
  };

    return (<div>
            <span>Choose limit: </span>
      <select onChange={selectInputHandler}>
        <option value="5" defaultChecked>
          5
        </option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
      {isLoading && <p>Searching...</p>}
            {!isLoading && response?.data.movies.map((movie) => {
                return <div key={movie.id}>
                    <MovieCard movie={movie}/>
                   
                </div>
            })}

    </div>)
}
export default MovieResult