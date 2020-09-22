import React, { useState } from 'react';

export default function App() {

  let [questionNum, setQuestionNum] = useState(0);
  let [score, setScore] = useState(0);
  let [finish, setFinish] = useState(false);
  

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
  ];
  
  const next = (event) => {

    let chosenAnswerId = event.target.id;
    let chosenAnswer = questions[questionNum].answerOptions[chosenAnswerId].isCorrect;
    chosenAnswer ? setScore(score += 1) : setScore(score);
    questionNum < 3 ? setQuestionNum(questionNum += 1) : setFinish(true);
  }

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{finish ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>{questionNum + 1}</span>/{questions.length}
						</div>
               <div className='question-text'>{questions[questionNum].questionText}</div>
					</div>
					<div className='answer-section'>
            {questions[questionNum].answerOptions.map((answer, key) => 
              <button onClick={next} key={key} id={key}>{answer.answerText}</button>            
            )}
					</div>
				</>
			)}
		</div>
	);
}