import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { setApiStatus } from 'src/app/shared/app.action';
import { selectAppState } from 'src/app/shared/app.selector';
import { Appstate } from 'src/app/shared/appstate';
import { updateNote } from '../store/notes.action';
import { selectNoteById } from '../store/notes.selector';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  noteForm: FormGroup;
  id: number;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private appStore: Store<Appstate>,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let fetchData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.id = Number(params.get('id'));
        return this.store.pipe(select(selectNoteById(this.id)));
      })
    );
    fetchData$.subscribe((data) => {
      if (data) {
        this.noteForm = new FormGroup({
          noteInformation: new FormControl(data.noteInformation, [
            Validators.required,
          ]),
          scale: new FormControl(data.scale, [
            Validators.min(0),
            Validators.max(5),
          ]),
        });
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  updateNote() {
    const newNotes = {
      id: this.id,
      noteInformation: this.noteForm.value.noteInformation,
      scale: this.noteForm.value.scale,
    };

    this.store.dispatch(updateNote({ payload: newNotes }));
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    this.toastr.success('', 'Note updated.');
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.appStore.dispatch(
          setApiStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/home']);
      }
    });
  }
}
