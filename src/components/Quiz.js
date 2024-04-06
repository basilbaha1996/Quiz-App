import React, { useContext, useState } from 'react';
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from '../Helpers/Context';

function Quiz() {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrQuestion(currQuestion + 1);
        setOptionChosen(""); // Reset the chosen option for the next question
    }

    const finishQuiz = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    };

    const handleOptionClick = (option) => {
        setOptionChosen(option);
    };

    return (
        <div className='Quiz'>
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className='options'>
                <button
                    onClick={() => handleOptionClick("A")}
                    className={optionChosen === "A" ? "chosen" : ""}
                >
                    {Questions[currQuestion].optionA}
                </button>
                <button
                    onClick={() => handleOptionClick("B")}
                    className={optionChosen === "B" ? "chosen" : ""}
                >
                    {Questions[currQuestion].optionB}
                </button>
                <button
                    onClick={() => handleOptionClick("C")}
                    className={optionChosen === "C" ? "chosen" : ""}
                >
                    {Questions[currQuestion].optionC}
                </button>
                <button
                    onClick={() => handleOptionClick("D")}
                    className={optionChosen === "D" ? "chosen" : ""}
                >
                    {Questions[currQuestion].optionD}
                </button>
            </div>
            {currQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    );
}

export default Quiz;
