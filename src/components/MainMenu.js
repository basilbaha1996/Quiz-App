import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'

function MainMenu() {
    const {gameSate, setGameState} = useContext(QuizContext);
  return (
    <div className='menu'>
       <button onClick={() => {
        setGameState("quiz");
       }}>
        Start Quiz
        </button>
    </div>
  );
}

export default MainMenu