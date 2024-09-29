import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Reducer';

const store = configureStore({
  reducer: {
    user: userReducer,//This is where the userReducer is assigned to manage the user slice of the state.
  },
});

export default store;