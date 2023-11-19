import { Outlet } from 'react-router-dom';
import MovieResult from '../MovieResult/MovieResult';
import NewTopBar from '../TopBar/TopBar';
import { useAppSelector } from '../../hooks/redux';
import './MainPage.css';
const NewMainPage = () => {
  const { isDetailOpen } = useAppSelector((state) => state.appReducer);

  return (
    <div className="main_container">
      <div
        className={!isDetailOpen ? `main-section-wide` : 'main-section-compact'}
      >
        <NewTopBar />
        <MovieResult />
      </div>
      <div
        className={!isDetailOpen ? 'side-section-close' : 'side-section-open'}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default NewMainPage;
