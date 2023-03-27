import { createReducer } from "@ngrx/store";
import { Notes } from "./notes";
 
export const initialState: ReadonlyArray<Notes> = [];
 
export const bookReducer = createReducer(
    initialState
);