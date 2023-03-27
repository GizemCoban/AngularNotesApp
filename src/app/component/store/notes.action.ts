import { createAction, props } from '@ngrx/store';
import { Notes } from './notes';

export const getNotesApi = createAction('[Note Api] GetNotesApi');

export const getNotesApiSuccess = createAction(
  '[Note Api] GetNotesApiSuccess',
  props<{ noteList: Notes[] }>()
);

export const addNewNote = createAction(
  '[Note Api] AddNewNote',
  props<{ payload: Notes }>()
);

export const addNewNoteResponse = createAction(
  '[Note Api] AddNewNoteResponse',
  props<{ response: Notes }>()
);
