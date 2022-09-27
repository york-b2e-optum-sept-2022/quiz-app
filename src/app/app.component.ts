import { Component } from '@angular/core';
import {DataService, STATE} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';
  state: STATE;

  constructor(private dataService: DataService) {
    this.state = this.dataService.state;
    this.dataService.$state.subscribe(
      (newState) => this.state = newState
    )
  }

}
