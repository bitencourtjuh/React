import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Option.css"

const Option = ({option, seletcOption, answer, hide}) => {
    const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div className={`
      option
        ${quizState.answerSeleted && option === answer ? "correct" : ""} ${
        quizState.answerSeleted && option !== answer ? "wrong" : ""
      } ${hide ? "hide" : ""}`}
       onClick={() => seletcOption()}>
        <p>{option}</p>
    </div>
  )
}

export default Option