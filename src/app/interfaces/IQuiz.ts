import {IQuestion} from "./IQuestion";
import {IResults} from "./IResults";

export interface IQuiz {
  questionList: IQuestion[];
  results: IResults | null;
}
