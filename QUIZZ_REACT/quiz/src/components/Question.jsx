import { useContext, useState } from 'react'
import { QuizContext } from '../context/quiz'

import Option from './Option'

import './Questions.css'


const Question = () => {

  const [quizState, dispatch]= useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOptions = (option)  => {
    dispatch({
        type: "CHECK_ANSWER",
        payload: { answer: currentQuestion.answer, option },
    })
  }

  console.log(quizState.optionToHide)

  return <div id='question'>
    <p> Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
    <h2>{currentQuestion.question}</h2>
    <div className="options-container">
        {currentQuestion.options.map((option) =>(
            <Option option={option} key={option} answer={currentQuestion.answer} seletcOption={() => onSelectOptions(option)} hide={quizState.optionToHide === option ? "hide" : null}/>
        ))}
    </div>
     {!quizState.answerSeleted && !quizState.help && (
        <>
          {currentQuestion.tip && (
            <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
          )}
          <button onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            Excluir uma
          </button>
        </>
      )}
      {!quizState.answerSeleted && quizState.help === "tip" && (
        <p>{currentQuestion.tip}</p>
      )}
    {quizState.answerSeleted && (<button onClick={() => dispatch({type: "CHARGE_QUESTION"})}>Continuar</button>)}
  </div>
}

export default Question