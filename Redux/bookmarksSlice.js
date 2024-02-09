// bookmarksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      state.push(action.payload);
    },
    removeBookmark: (state, action) => {
      return state.filter((card) => card !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export const selectBookmarks = (state) => state.bookmarks;
export default bookmarksSlice.reducer;
