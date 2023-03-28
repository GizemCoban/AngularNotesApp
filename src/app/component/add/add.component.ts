import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { setApiStatus } from 'src/app/shared/app.action';
import { selectAppState } from 'src/app/shared/app.selector';
import { Appstate } from 'src/app/shared/appstate';
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
    private appStore: Store<Appstate>,
    private toastr: ToastrService
  ) {}

  noteForm: FormGroup;

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      noteInformation: new FormControl('', [Validators.required]),
      scale: new FormControl(0, [Validators.min(0), Validators.max(5)]),
    });
  }

  saveNewNote() {
    if (this.noteForm.status === 'INVALID') {
      return alert('Formu Kontrol Ediniz');
    }
    const newNotes = {
      id: 0,
      noteInformation: this.noteForm.value.noteInformation,
      scale: this.noteForm.value.scale,
    };

    this.store.dispatch(addNewNote({ payload: newNotes }));
    let appState$ = this.appStore.pipe(select(selectAppState));
    this.toastr.success('', 'Note added');
    appState$.subscribe((data) => {
      if (data.apiStatus === 'success') {
        this.appStore.dispatch(
          setApiStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/home']);
      }
    });
  }
}
