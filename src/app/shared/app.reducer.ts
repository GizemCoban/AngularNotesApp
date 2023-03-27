import { createReducer, on } from '@ngrx/store';
import { setApiStatus } from './app.action';
import { Appstate } from './appstate';

export const initialState: Appstate = {
  apiStatus: '',
  apiResponseMessage: '',
};
export const appReducer = createReducer(
  initialState,
  on(setApiStatus, (state, { apiStatus }) => {
    return apiStatus;
  })
);
