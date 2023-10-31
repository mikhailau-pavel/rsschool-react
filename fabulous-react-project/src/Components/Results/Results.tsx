import { Component } from 'react';
import './Results.css'
import { ResultsProps } from '../../componentTypes';


class Results extends Component<ResultsProps> {
    render() {
        return (
          <div className="data-container">
            {this.props.arrayOfPlanets.length
              ? this.props.arrayOfPlanets.map((el, index) => {
                  return (
                    <div className="item__container" key={index}>
                      <h4>Planet: {el.name}</h4>
                      <p>Diameter: {el.diameter}</p>
                    </div>
                  );
                })
              : "calculate coordinates..."}
          </div>
        );
      }
}

export default Results