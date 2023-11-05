import {FC, useState } from 'react';
import './MainPage.css';
import TopBar from '../TopBar/TopBar';
import Results from '../Results/Results';
import { Planet } from '../../componentTypes';
import FakeErrorButton from '../FakeErrorButton/FakeErrorButton';
import type { MainPageProps } from '../../componentTypes';
import { useSearchParams } from 'react-router-dom';

const ROWS_PER_PAGE = 10;
const getTotalPageCount = (rowCount: number): number =>
  Math.ceil(rowCount / ROWS_PER_PAGE);

const MainPage: FC<MainPageProps> = () => {
  const [dataValue, setDataValue] = useState<Planet[]>([])
  const [items, setItems] = useState<number>(0);
  const [, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  const page = Number(searchParams.get("page"));
  const changeLoadStatus = (status: boolean) => {
    setLoading(status);
  };

  const prevPageClick = () => {
    setSearchParams({ page: String(page - 1) });
  };
  const nextPageClick = () => {
    setSearchParams({ page: String(page + 1) });
  };

  return (
    <div className="main-page-container">
      <TopBar changeValueFunction={setDataValue} changeLogStatus={changeLoadStatus} setItems={setItems} setURLParams={setSearchParams} page={page.toString()}/>
      <FakeErrorButton/>
      <Results arrayOfPlanets={dataValue} onNextPageClick={nextPageClick} onPrevPageClick={prevPageClick} disable={{
        left: page === 1,
        right: page === getTotalPageCount(items)
      }}
      nav={{current: page, total: getTotalPageCount(items)}}  />
    </div>
  );
}

export default MainPage;
