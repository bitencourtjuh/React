import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import WellDone from "../img/welldone.svg"

import "./GamerOver.css"

const GamerOver = () => {
    const [quizState, dispatch]= useContext(QuizContext)

  return (
    <div id="gameover">
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas</p>
        <img src={WellDone} alt="Fim do Quiz" />
        <button onClick={() => dispatch({type: "NEW_GAMER"})}>Reiniciar</button>
    </div>
  )
}

export default GamerOver