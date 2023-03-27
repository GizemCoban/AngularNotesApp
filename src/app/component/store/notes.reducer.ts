import { Action, createReducer, on } from '@ngrx/store';
import { Notes } from './notes';
import * as actions from './notes.action';

export interface State {
    noteList: Notes[];
  }
  export const initialState: State = {
    noteList: [],
  };
export const noteReducer = createReducer(
  initialState,
  on(actions.getNotesApi, (state, action) => ({
    ...state,
    noteList: [],
  })),
  on(actions.getNotesApiSuccess, (state, action) => ({
    ...state,
    noteList: action.noteList,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return noteReducer(state, action);
}
