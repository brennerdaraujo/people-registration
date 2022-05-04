import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private _lastId: number = 0;
  private _people: Person[] = [];
  private _personUpdated = new Subject<Person[]>();

  getPeople() {
    this._people = [];
    this._personUpdated.next([...this._people]);
  }

  getPersonUpdateListener() {
    return this._personUpdated.asObservable();
  }

  addPerson(name: string, phone: string) {
    const person: Person = {
      id: ++this._lastId,
      name,
      phone
    };
    this._people.push(person);
    this._personUpdated.next([...this._people]);
  }

  delPerson(id: number) {
    const index: number = this._people.findIndex((person: Person) => person.id === id);

    if (index >= 0) {
      this._people.splice(index, 1);
      this._personUpdated.next([...this._people]);
    }
  }
}
