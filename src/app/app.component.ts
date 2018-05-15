import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  host: {
    '(document:click)': 'handleClick($event)',
  },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(){ }
}

