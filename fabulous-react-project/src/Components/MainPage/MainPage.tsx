import {FC, useState } from 'react';
import './MainPage.css';
import TopBar from '../TopBar/TopBar';
import Results from '../Results/Results';
import { Planet } from '../../componentTypes';
import FakeErrorButton from '../FakeErrorButton/FakeErrorButton';

const MainPage: FC = () => {
  const [dataValue, setDataValue] = useState<Planet[]>([])
  return (
    <div className="main-page-container">
      <TopBar changeValueFunction={setDataValue} />
      <FakeErrorButton/>
      <Results arrayOfPlanets={dataValue} />
    </div>
  );
}

export default MainPage;
