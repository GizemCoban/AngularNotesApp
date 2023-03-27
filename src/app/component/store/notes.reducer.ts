import { createReducer } from '@ngrx/store';
import { Notes } from './notes';

export const initialState: ReadonlyArray<Notes> = [];

export const notesReducer = createReducer(initialState);
