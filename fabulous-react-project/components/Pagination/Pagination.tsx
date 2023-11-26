import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../src/hooks/redux';
import { appSlice } from '../../src/store/reducers/AppReducer';

interface PaginationProps {
  total: number | undefined;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { total } = props;
  const { page } = useAppSelector((state) => state.appReducer);
  const { setPageNumber } = appSlice.actions;
  const dispatch = useAppDispatch();

  const onPrevPageClick = () => {
    dispatch(setPageNumber(page - 1));
  };

  const onNextPageClick = () => {
    dispatch(setPageNumber(page + 1));
  };

  return (
    <div>
      <button type="button" onClick={onPrevPageClick} disabled={page === 1}>
        prev
      </button>
      <span>
        {page} / {total}
      </span>
      <button type="button" onClick={onNextPageClick} disabled={page === total}>
        next
      </button>
    </div>
  );
};

export default Pagination;
