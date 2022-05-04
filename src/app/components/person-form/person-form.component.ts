import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ErrorHelper } from 'src/app/helpers/error.helper';

import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements AfterViewInit {

  personForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    phone: new FormControl('', [
      Validators.required
    ]),
  });
  @ViewChild('nameInput') nameInput: ElementRef = new ElementRef(null);

  constructor(
    private _errorHelper: ErrorHelper,
    private _peopleService: PeopleService
  ) { }

  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
  }

  onSubmit(): void {
    if (this.personForm.valid) {
      const person = this.personForm.value;

      this._peopleService.addPerson(person.name, person.phone);
    }

    this.personForm.reset();
    this.nameInput.nativeElement.focus();
  }

  showInputError(inputName: string) {
    const errors = this.personForm.get(inputName)?.errors || {};

    return this._errorHelper.getErrorMessage(errors);
  }
}
