// store.js
import { configureStore } from '@reduxjs/toolkit';
import bookmarksReducer from './bookmarksSlice';

const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
    // Add other reducers here if you have them
  },
});

export default store;