import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { NotesService } from '../notes.service';
import * as NoteAction from './notes.action';

@Injectable()
export class NotesEffect {
  constructor(
    private readonly actions$: Actions,
    private service: NotesService
  ) {}

  loadAllBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteAction.getNotesApi),
      switchMap((action) =>
        this.service
          .get()
          .pipe(map((noteList) => NoteAction.getNotesApiSuccess({ noteList })))
      )
    )
  );
}
