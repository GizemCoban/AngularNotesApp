import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Notes } from './notes';
import { State } from './notes.reducer';

export const selectNotes = createFeatureSelector<State>('mynotes');

export const getNoteList = createSelector(
  selectNotes,
  (state) => state.noteList
);

export const selectNoteById = (noteId: number) =>
  createSelector(getNoteList, (notes: Notes[]) => {
    var notebyId = notes.filter((_) => _.id == noteId);
    if (notebyId.length == 0) {
      return null;
    }
    return notebyId[0];
  });
