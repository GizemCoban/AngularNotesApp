import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { setApiStatus } from 'src/app/shared/app.action';
import { Appstate } from 'src/app/shared/appstate';
import { NotesService } from '../notes.service';
import * as NoteAction from './notes.action';

@Injectable()
export class NotesEffect {
  constructor(
    private readonly actions$: Actions,
    private service: NotesService,
    private appStore: Store<Appstate>
  ) {}

  loadAllNote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteAction.getNotesApi, NoteAction.addNewNoteResponse),
      switchMap((action) =>
        this.service
          .get()
          .pipe(map((noteList) => NoteAction.getNotesApiSuccess({ noteList })))
      )
    )
  );

  addNewNote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteAction.addNewNote),
      switchMap((action) => {
        this.appStore.dispatch(
          setApiStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.service.addNewNote(action.payload).pipe(
          map((data) => {
            this.appStore.dispatch(
              setApiStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return NoteAction.addNewNoteResponse({ response: data });
          })
        );
      })
    )
  );


  updateNoteAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NoteAction.updateNote),
      switchMap((action) => {
        this.appStore.dispatch(
          setApiStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.service.updateNote(action.payload).pipe(
          map((data) => {
            this.appStore.dispatch(
              setApiStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return NoteAction.updateNoteResponse({ updateNote: data });
          })
        );
      })
    );
  });
}
