import { FC, useContext } from 'react';
import './Results.css';
import { ResultsProps } from '../../componentTypes';
import { Link } from 'react-router-dom';
import { PlanetContext } from '../../context/contextInput';


const Results: FC<ResultsProps> =(props) => {
const {isLoad, nav = null, disable, onNextPageClick, onPrevPageClick, setPanelAppear, page} = {...props}

const contextPlanets = useContext(PlanetContext)
const arrayOfPlanets = contextPlanets?.planets || []


const showDetails = () => {
  setPanelAppear(false)
}
  return (
    <div className="data-container">
    <div className='pagination'>
      <button type="button" onClick={onPrevPageClick} disabled={disable.left}>
        prev
      </button>
      {nav && (
        <span>
          {nav.current} / {nav.total}
        </span>
      )}
      <button type="button" onClick={onNextPageClick} disabled={disable.right}>
        next
      </button>
    </div>



      {!isLoad
        ? arrayOfPlanets.map((el, index) => {
          const id = el.url.split("/").at(-2);
            return (
              <div className="item__container" key={index} title='item'>
                <Link to={{ pathname: `/detail/${id}`, search: `page=${page}` }}>
                <div onClick={showDetails}>
                  <h4>Planet: {el.name}</h4>
                  <p>Diameter: {el.diameter}</p>
                </div>
                </Link>

                
              </div>
            );
          })
          
        : 'calculate coordinates...'}
     {!arrayOfPlanets.length && !isLoad && (
        <p>no planets</p>
      )}
    </div>
  );
}
export default Results;
