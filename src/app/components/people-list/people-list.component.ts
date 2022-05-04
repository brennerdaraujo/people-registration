import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Person } from 'src/app/models/person.model';

import { PeopleService } from 'src/app/services/people.service';
import { DialogService } from 'src/app/services/dialog.service';

import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'phone', 'actions'];
  peopleData: MatTableDataSource<Person> = new MatTableDataSource<Person>([]);
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  private _peopleSub: Subscription = new Subscription();

  constructor(
    private _peopleService: PeopleService,
    private _dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this._peopleService.getPeople();

    this._peopleSub = this._peopleService.getPersonUpdateListener()
      .subscribe(
        (people: Person[]) => {
          this.peopleData = new MatTableDataSource<Person>(people);
          this.peopleData.sort = this.sort;
        }
      );
  }

  ngAfterViewInit() {
    this.peopleData.sort = this.sort;
  }

  ngOnDestroy(): void {
    this._peopleSub.unsubscribe();
  }

  onSearchPerson(filter: string) {
    this.peopleData.filter = filter;
  }

  onDeletePerson(person: Person): void {
    this._dialogService.open(DeleteConfirmationDialogComponent, {
      title: person.name,
      message: 'Deseja realmente remover essa pessoa?'
    });

    this._dialogService.afterClosed()
      .subscribe({
        next: (value) => {
          if (value) {
            this._peopleService.delPerson(person.id);
          }
        },
        error: (err) => console.error(err)
      });
  }
}
