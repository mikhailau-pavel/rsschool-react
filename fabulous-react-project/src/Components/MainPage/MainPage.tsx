import {FC, useState } from 'react';
import './MainPage.css';
import TopBar from '../TopBar/TopBar';
import Results from '../Results/Results';
import { Planet } from '../../componentTypes';
import FakeErrorButton from '../FakeErrorButton/FakeErrorButton';
import type { MainPageProps } from '../../componentTypes';
import { Outlet, useSearchParams } from 'react-router-dom';
import { PlanetContext } from '../../context/contextInput';

const ROWS_PER_PAGE = 10;
const getTotalPageCount = (rowCount: number): number =>
  Math.ceil(rowCount / ROWS_PER_PAGE);

const MainPage: FC<MainPageProps> = (props) => {
  const [planets, setPlanets] = useState<Planet[]>([])
  const [items, setItems] = useState<number>(0);
  const [, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });
  const {isPanelExpand, setPanelAppear} = {...props}
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
      <PlanetContext.Provider value={{ planets, setPlanets}}>
      <div className={isPanelExpand ? 'main-section-wide' : 'main-section-compact'}>
      <TopBar changeLogStatus={changeLoadStatus} setItems={setItems} setURLParams={setSearchParams} page={page.toString()}/>
      <FakeErrorButton/>
      <Results onNextPageClick={nextPageClick} onPrevPageClick={prevPageClick} disable={{
          left: page === 1,
          right: page === getTotalPageCount(items)
        }}
        nav={{ current: page, total: getTotalPageCount(items) }} setPanelAppear={setPanelAppear} page={page.toString()}     />
      </div>
      <div className={isPanelExpand ? 'side-section-close' : 'side-section-open'}>
          <Outlet/>
      </div>

      </PlanetContext.Provider>
    </div>
      
      
  );
}

export default MainPage;
