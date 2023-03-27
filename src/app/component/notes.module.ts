import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesRoutingModule } from './notes-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { notesReducer } from './store/notes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NotesEffect } from './store/notes.effect';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    StoreModule.forFeature('mynotes', notesReducer),
    EffectsModule.forFeature([NotesEffect]),
  ],
})
export class NotesModule {}
