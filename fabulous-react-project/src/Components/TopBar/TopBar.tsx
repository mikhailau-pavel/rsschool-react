import { Component } from 'react';
import './TopBar.css';
import {
  TopBarProps,
  SearchResult,
  Planet,
  TopBarState,
} from '../../componentTypes';

class TopBar extends Component<TopBarProps, TopBarState> {
  state = {
    inputValue: localStorage.getItem('request') || '',
  };

  changeInputHandle = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.currentTarget.value });
  };

  buttonClickHandle = () => {
    localStorage.setItem('request', this.state.inputValue);
    this.getData();
  };

  async getData() {
    const storedInput: string = localStorage.getItem('request') || '';
    const response: Response = await fetch(
      `https://swapi.dev/api/planets/?search=${storedInput}`
    );
    const searchResponse: SearchResult = await response.json();
    const data: Planet[] = searchResponse.results;
    this.props.changeValueFunction(data);
  }

  componentDidMount(): void {
    this.getData();
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.changeInputHandle}
        />
        <button onClick={this.buttonClickHandle}>Click</button>
      </div>
    );
  }
}

export default TopBar;
