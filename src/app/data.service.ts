import {Injectable} from '@angular/core';
import {IQuiz} from "./interfaces/IQuiz";
import {IQuestion} from "./interfaces/IQuestion";
import {Subject} from "rxjs";

export enum STATE {
  QUIZ = "QUIZ",
  RESULTS = "RESULTS"
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private quiz: IQuiz;
  state: STATE = STATE.QUIZ
  $state = new Subject<STATE>();

  constructor() {
    this.quiz = {
      questionList: [
        {
          text: "question 1!",
          selectedAnswer: null,
          correctAnswer: 'answer 1',
          answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4']
        },
        {
          text: "question 2!",
          selectedAnswer: null,
          correctAnswer: 'answer 1',
          answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4']
        },
        {
          text: "question 3!",
          selectedAnswer: null,
          correctAnswer: 'answer 2',
          answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4']
        }
      ],
      results: null
    }
  }

  getQuiz() {
    return {...this.quiz}
  }

  selectAnswer(question: IQuestion, answerText: string) {
    question.selectedAnswer = answerText;
  }

  submitQuiz() {
    let correctCount = 0;
    for (const question of this.quiz.questionList) {
      if (question.selectedAnswer === question.correctAnswer) {
        correctCount += 1;
      }
    }

    this.quiz.results = {
      score: correctCount / this.quiz.questionList.length,
      correctCount: correctCount,
      questionCount: this.quiz.questionList.length,
    };


    this.state = STATE.RESULTS;
    this.$state.next(this.state);
  }


}
