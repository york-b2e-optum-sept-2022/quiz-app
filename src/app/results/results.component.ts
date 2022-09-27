import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {IResults} from "../interfaces/IResults";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results!: IResults;

  constructor(private dataService: DataService) {
    const results = this.dataService.getQuiz().results;
    if (results !== null) {
      this.results =  results;
    } else {
      console.error('BIG PROBLEM')
    }
  }

  ngOnInit(): void {
  }

}
