import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppState {
  isDetailOpen: boolean;
  query: string;
  limit: number;
  page: number;
  totalItems: number | null;
}

const initialState: AppState = {
  isDetailOpen: false,
  query: localStorage.getItem('query-term') || '',
  limit: 5,
  page: 1,
  totalItems: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showDetails(state) {
      state.isDetailOpen = true;
    },
    closeDetails(state) {
      state.isDetailOpen = false;
    },
    setPageNumber(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setQueryString(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    changeLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setTotalItems(state, action: PayloadAction<number>) {
      state.totalItems = action.payload;
    },
  },
});

export default appSlice.reducer;
