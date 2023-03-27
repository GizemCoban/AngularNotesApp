import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Notes } from '../store/notes';
import { getNotesApi } from '../store/notes.action';
import { getNoteList } from '../store/notes.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  notes$!: Observable<Notes[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.notes$ = this.store.pipe(select(getNoteList));
    this.store.dispatch(getNotesApi());
  }
}
