import {FC, useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import PlanetSite from './Components/PlanetSite/PlanetSite';
import Page404 from './Components/Page404/Page404';
import { InputValueContext } from './context/contextInput'

const App: FC = () => {
  const [isPanelExpand, setPanelAppear] = useState(false);
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem("request") || "",
  );

  return (
    <>
    <InputValueContext.Provider value={{ inputValue, setInputValue }}>
      <Routes>
          <Route
            path="/"
            element={
              <MainPage isPanelExpand={isPanelExpand} setPanelAppear={setPanelAppear} />
            }
          >
            <Route
              path="/detail/:id"
              element={<PlanetSite setPanelAppear={setPanelAppear} />}
            />
            </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
     
    </InputValueContext.Provider>
    
    </>
  );
}
export default App;
