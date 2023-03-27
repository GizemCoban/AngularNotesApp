import { createAction, props } from '@ngrx/store';
import { Notes } from './notes';

export const getNotesApi = createAction('[Note Api] GetNotesApi');

export const getNotesApiSuccess = createAction(
  '[Note Api] GetNotesApiSuccess',
  props<{ noteList: Notes[] }>()
);

