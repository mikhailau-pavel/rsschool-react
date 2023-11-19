import {FC} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Page404 from './Components/Page404/Page404';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
import NewMainPage from './Components/MainPage/NewMainPage';
import MovieDetail from './Components/MovieDetail/MovieDetail';


const store = setupStore()
const App: FC = () => {
  /*const [isPanelExpand, setPanelAppear] = useState(false);
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem("request") || "",
  );*/


  return (<div>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<NewMainPage/>}>
          <Route path="/detail/:id" element={<MovieDetail/>}/>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      
    </Provider>
  </div>)
  /*return (
    <>
    <Provider store={store}>
      
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
    
    </Provider>
    
    
    </>
  );*/
}
export default App;
