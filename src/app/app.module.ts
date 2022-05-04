import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { NgxMaskModule } from 'ngx-mask';

import { ErrorHelper } from './helpers/error.helper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonFormComponent,
    PeopleListComponent,
    DeleteConfirmationDialogComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    ErrorHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
