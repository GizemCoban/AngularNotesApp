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
  noteForm: FormGroup;
  imageFile: any;

  constructor(
    private store: Store,
    private router: Router,
    private appStore: Store<Appstate>,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      noteInformation: new FormControl('', [Validators.required]),
      scale: new FormControl(0, [Validators.min(0), Validators.max(5)]),
      image: new FormControl(''),
    });
  }

  saveNewNote() {
    if (this.noteForm.status === 'INVALID') {
      this.toastr.error('', 'Check the form');
    }
    const newNotes = {
      id: 0,
      noteInformation: this.noteForm.value.noteInformation,
      scale: this.noteForm.value.scale,
      image: this.imageFile && this.imageFile.src,
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

  onFileChanged(event: any) {
    if (event.target.files && event.target.files[0]) {
      const max_size = 20971520;

      if (event.target.files[0].size > max_size) {
        this.toastr.error(
          '',
          'Maximum size allowed is ' + max_size / 1000 + 'Mb'
        );
        return false;
      }

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.imageFile = new Image();
        this.imageFile.src = e.target.result;
        console.log(this.imageFile.src)
      };
    }
    return true;
  }
}
