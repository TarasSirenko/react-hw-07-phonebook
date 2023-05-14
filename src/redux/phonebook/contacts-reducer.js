import { combineReducers, createReducer } from '@reduxjs/toolkit';

import { filterAction } from './contacts-action';

const filterReducer = createReducer('', builder =>
  builder.addCase(filterAction, (_, action) => action.payload),
);

export default combineReducers({
  filter: filterReducer,
});
