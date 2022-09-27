export interface IQuestion {
  text: string;
  selectedAnswer: string | null;
  correctAnswer: string;
  answers: string[];
}
