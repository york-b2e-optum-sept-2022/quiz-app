import {Component, Input, OnInit} from '@angular/core';
import {IQuestion} from "../interfaces/IQuestion";
import {DataService} from "../data.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question!: IQuestion;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onAnswerSelect(answerText: string) {
    console.log(answerText);
    this.dataService.selectAnswer(this.question, answerText);
  }

}
