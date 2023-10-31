import { Component } from 'react';
import './MainPage.css';
import TopBar from '../TopBar/TopBar';
import Results from '../Results/Results';
import { Planet } from '../../componentTypes';
import FakeErrorButton from '../FakeErrorButton/FakeErrorButton';

class MainPage extends Component {
  state = { dataValue: [] };

  setNewState = (newValue: Planet[]) => {
    this.setState({ dataValue: newValue });
  };

  render() {
    return (
      <div className="main-page-container">
        <TopBar changeValueFunction={this.setNewState} />
        <FakeErrorButton/>
        <Results arrayOfPlanets={this.state.dataValue} />
      </div>
    );
  }
}

export default MainPage;
