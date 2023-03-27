import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesRoutingModule } from './notes-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { NotesEffect } from './store/notes.effect';
import { noteReducer } from './store/notes.reducer';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [HomeComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    StoreModule.forFeature('mynotes', noteReducer),
    EffectsModule.forFeature([NotesEffect]),
  ],
})
export class NotesModule {}
