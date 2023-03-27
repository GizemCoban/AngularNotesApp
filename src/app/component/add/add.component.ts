import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setApiStatus } from 'src/app/shared/app.action';
import { selectAppState } from 'src/app/shared/app.selector';
import { Appstate } from 'src/app/shared/appstate';
import { Notes } from '../store/notes';
import { addNewNote } from '../store/notes.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(
    private store: Store,
    private router: Router,
    private appStore: Store<Appstate>
  ) {}

  noteForm: Notes = {
    id: 0,
    title: '',
    note: '',
  };
  
  saveNewNote() {
    this.store.dispatch(addNewNote({ payload: { ...this.noteForm } }));
    let appState$ = this.appStore.pipe(select(selectAppState));
    appState$.subscribe((data) => {
      if (data.apiStatus === 'success') {
        this.appStore.dispatch(
          setApiStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/']);
      }
    });
  }
}
