import { FC } from 'react';
import './Results.css';
import { ResultsProps } from '../../componentTypes';


const Results: FC<ResultsProps> =(props) => {
const {arrayOfPlanets, nav = null, disable, onNextPageClick, onPrevPageClick} = {...props}
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



      {arrayOfPlanets.length
        ? arrayOfPlanets.map((el, index) => {
            return (
              <div className="item__container" key={index}>
                <h4>Planet: {el.name}</h4>
                <p>Diameter: {el.diameter}</p>
              </div>
            );
          })
          
        : 'calculate coordinates...'}
    </div>
  );
}
export default Results;
