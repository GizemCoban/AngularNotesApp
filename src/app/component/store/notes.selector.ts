import { createFeatureSelector } from '@ngrx/store';
import { Notes } from './notes';
 
export const selectNotes = createFeatureSelector<Notes[]>('mynotes');