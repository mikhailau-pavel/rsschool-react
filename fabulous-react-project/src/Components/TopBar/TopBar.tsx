import {FC, useCallback, useContext, useEffect } from 'react';
import './TopBar.css';
import {
  TopBarProps,
  SearchResult,
  Planet,
} from '../../componentTypes';
import { InputValueContext } from '../../context/contextInput';

const TopBar: FC<TopBarProps> = (props) => {
const { changeValueFunction, setItems, setURLParams, page } = {...props}

const contextStorage = useContext(InputValueContext)

const inputValue = contextStorage?.inputValue || ''

const setInputValue = contextStorage?.setInputValue

const changeInputHandle = (event: React.FormEvent<HTMLInputElement>) => {
  if (setInputValue) {
    setInputValue(event.currentTarget.value)
  }
};


const buttonClickHandle = () => {
  localStorage.setItem('request', inputValue);
  if (page !== "1") {
    setURLParams({ page: "1" });
    return;
  }
  getData(page);
 
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

}, [page])


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
