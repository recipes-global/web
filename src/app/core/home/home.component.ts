import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  isSearchEnabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSearch() {
    this.isSearchEnabled = !this.isSearchEnabled;
  }

}
