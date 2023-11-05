import {FC, useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import PlanetSite from './Components/PlanetSite/PlanetSite';
import Page404 from './Components/Page404/Page404';

const App: FC = () => {
  const [isPanelExpand, setPanelAppear] = useState(false);
  return (
    <>
    <Routes>
          <Route
            path="/"
            element={
              <MainPage isPanelExpand={isPanelExpand} setPanelAppear={setPanelAppear} />
            }
          >
            <Route
              path="/planet/:id"
              element={<PlanetSite setPanelAppear={setPanelAppear} />}
            />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
     
    </>
  );
}
export default App;
