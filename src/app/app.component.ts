import {Component, OnDestroy} from '@angular/core';
import {DataService, STATE} from "./data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'quiz-app';
  state: STATE;

  sub: Subscription;

  constructor(private dataService: DataService) {
    this.state = this.dataService.state;
    this.sub = this.dataService.$state.subscribe(
      (newState) => this.state = newState
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
