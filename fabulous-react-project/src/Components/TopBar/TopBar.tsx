import {FC, useCallback, useEffect, useState } from 'react';
import './TopBar.css';
import {
  TopBarProps,
  SearchResult,
  Planet,
} from '../../componentTypes';

const TopBar: FC<TopBarProps> = (props) => {
const {changeValueFunction} = {...props}
const [inputValue, setInputValue] = useState<string>(localStorage.getItem('request') || '')

const changeInputHandle = (event: React.FormEvent<HTMLInputElement>) => {
  setInputValue(event.currentTarget.value)
};


const buttonClickHandle = () => {
  localStorage.setItem('request', inputValue);
 getData(inputValue);
};

const getData = useCallback(async (value: string) => {
  //const storedInput: string = localStorage.getItem('request') || '';
  const response: Response = await fetch(
    `https://swapi.dev/api/planets/?search=${value}`
  );
  const searchResponse: SearchResult = await response.json();
  const data: Planet[] = searchResponse.results;
  changeValueFunction(data);
}, [changeValueFunction])

useEffect(()=> {
  getData(inputValue)
}, [getData, inputValue])


  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={changeInputHandle}
      />
      <button onClick={buttonClickHandle}>Click</button>
    </div>
  );
}

export default TopBar;
