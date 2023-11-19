import { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Page404 from './Components/Page404/Page404';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
import NewMainPage from './Components/MainPage/MainPage';
import MovieDetail from './Components/MovieDetail/MovieDetail';

const store = setupStore();
const App: FC = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NewMainPage />}>
            <Route path="/detail/:id" element={<MovieDetail />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Provider>
    </div>
  );
};
export default App;
