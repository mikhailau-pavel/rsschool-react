import {FC, useCallback, useEffect, useState } from 'react';
import './TopBar.css';
import {
  TopBarProps,
  SearchResult,
  Planet,
} from '../../componentTypes';

const TopBar: FC<TopBarProps> = (props) => {
const { changeValueFunction, /*changeLogStatus, */setItems, setURLParams, page } = {...props}
const [inputValue, setInputValue] = useState<string>(localStorage.getItem('request') || '')

const changeInputHandle = (event: React.FormEvent<HTMLInputElement>) => {
  setInputValue(event.currentTarget.value)
};


const buttonClickHandle = () => {
  localStorage.setItem('request', inputValue);
  if (page !== "1") {
    setURLParams({ page: "1" });
    return;
  }
  getData(inputValue);
 
};

const getData = useCallback(async (page?: string) => {
  const pageNumber = page ? `&page=${page}` : "";
  const response: Response = await fetch(
    `https://swapi.dev/api/planets/?search=${inputValue}${pageNumber}`
  );
  const searchResponse: SearchResult = await response.json();
  const data: Planet[] = searchResponse.results;
  changeValueFunction(data);
  setItems(searchResponse.count);
}, [changeValueFunction, setItems, inputValue])

useEffect(()=> {
  getData(page)
}, [getData, page])


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
