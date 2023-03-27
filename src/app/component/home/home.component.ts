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
import { getNoteList } from '../store/notes.selector';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  notes$!: Observable<Notes[]>;
  deleteModal: any;
  idToDelete: number = 0;
  searchControl:string='';

  constructor(
    private store: Store,
    private appStore: Store<Appstate>,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
   
    this.notes$ = this.store.pipe(select(getNoteList));
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
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.deleteModal.hide();
        
        this.toastr.success('', 'Note Deleted');
        this.appStore.dispatch(
          setApiStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/']);
      }
    });
  }
}
