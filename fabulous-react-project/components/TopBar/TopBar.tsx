import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../src/hooks/redux';
import { appSlice } from '../../src/store/reducers/AppReducer';

const NewTopBar: FC = () => {
  const { query } = useAppSelector((state) => state.appReducer);
  const { setQueryString, setPageNumber } = appSlice.actions;
  const [inputValue, setInputValue] = useState<string>(query);
  const dispatch = useAppDispatch();

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const buttonClickHandler = () => {
    dispatch(setQueryString(inputValue));
    dispatch(setPageNumber(1))
    localStorage.setItem('query-term', inputValue);
  };

  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={inputChangeHandler} />
        <button onClick={buttonClickHandler}>Search</button>
      </div>
    </>
  );
};

export default NewTopBar;
