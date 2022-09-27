import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {IQuestion} from "../interfaces/IQuestion";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questionList: IQuestion[] = [];

  constructor(private dataService: DataService) {
    this.questionList = this.dataService.getQuiz().questionList;
  }

  ngOnInit(): void {
  }

  submitQuiz() {
    this.dataService.submitQuiz();
  }

}
