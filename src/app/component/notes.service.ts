import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notes } from './store/notes';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Notes[]>('http://localhost:3000/notes');
  }
}
