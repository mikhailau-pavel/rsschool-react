import React from 'react'
import { useFetchMovieByIdQuery } from '../src/apiService/MovieServer';
import { useRouter } from 'next/router';

export default function DetailPage() {
    const route = useRouter()
    const id = route.query.movie
  const { data: data, isFetching } = useFetchMovieByIdQuery(Number(id));

  const closeSideSection = () => {
    route.replace('/')
  };

  return (
    <div>
      <button onClick={closeSideSection}>CLOSE</button>
      {!isFetching ? (
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
  }