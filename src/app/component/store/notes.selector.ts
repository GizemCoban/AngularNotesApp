import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './notes.reducer';


export const selectNotes = createFeatureSelector<State>('mynotes');

export const getNoteList = createSelector(
  selectNotes,
  (state) => state.noteList
);
