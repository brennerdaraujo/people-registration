import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  onSearchSomething(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.onSearch.emit(filterValue.trim().toLowerCase());
  }
}
