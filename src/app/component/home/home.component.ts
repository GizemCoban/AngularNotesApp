import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { setApiStatus } from 'src/app/shared/app.action';
import { selectAppState } from 'src/app/shared/app.selector';
import { Appstate } from 'src/app/shared/appstate';
import { Notes } from '../store/notes';
import { deleteNote, getNotesApi } from '../store/notes.action';
import { getNoteList, searchValue } from '../store/notes.selector';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  notes$: Observable<Notes[]> = this.store.pipe(select(getNoteList));
  deleteModal: any;
  idToDelete: number = 0;
  searchControl = new FormControl();

  public sortBy = ['small to big', 'big to small'];

  selectedSort = 'Selected Scale';

  displaySize = 5;

  constructor(
    private store: Store,
    private appStore: Store<Appstate>,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.notes$ = this.store.pipe(select(getNoteList));
  }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.searchControl.valueChanges.subscribe((value) => {
      this.notes$ =
        value != undefined || value != null
          ? this.store.pipe(select(searchValue(value)))
          : this.store.pipe(select(getNoteList));
    });

    this.store.dispatch(getNotesApi());
  }

  openDeleteModal(id: number) {
    this.idToDelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.store.dispatch(
      deleteNote({
        id: this.idToDelete,
      })
    );
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    this.toastr.success('', 'Note Deleted');
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.deleteModal.hide();
        this.appStore.dispatch(
          setApiStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/home']);
      }
    });
  }

  sort(notes?: Notes[]) {
    if (notes)
      if (this.selectedSort === 'small to big')
        return [...notes].sort((a: Notes, b: Notes) => a.scale - b.scale);
      else if (this.selectedSort === 'big to small')
        return [...notes].sort((a: Notes, b: Notes) => b.scale - a.scale);
      else return notes.reverse();

    return [];
  }

  onClickMore() {
    this.displaySize +=5
  }
}
