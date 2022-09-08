import React, {useState, useMemo} from 'react'
import {shuffle} from 'lodash'
import {nanoid} from 'nanoid'

const QuestionPanel = ({questionArray, setScore}) => {
 
   const [disableBtn, setDisable] = useState(false)
   
    const answers = useMemo(() => shuffle([questionArray.correct_answer, ...questionArray.incorrect_answers]), [questionArray])
    
    function filterID(selectedId) {
        var filteredArray = randomID.filter(id => id !== selectedId)
        for(let i=0; i < filteredArray.length; i++) {
            document.getElementById(filteredArray[i]).className = 'disableEverything'
        }
    }

    var test;

    
    function answerSelected(answer, isCorrect, id, theWholeArray) {
        if (isCorrect) {
            document.getElementById(id).className = 'correctAnswer'
            setScore(prevState => prevState + 1)
            
            filterID(id)
            
        }
        if (!isCorrect) {
            document.getElementById(id).className = 'incorrectAnswer'
            console.log(theWholeArray)
        }
          
    
    }

    const randomID = [nanoid(),nanoid(),nanoid(),nanoid()]
    let counter = 0;
    const finalArray = answers.map((answer, index) => {
       var answerID = randomID[counter]
        
        counter++
        return (
            <button
                key={index}
                id = {answerID}
                onClick={() => answerSelected(answer, answer === questionArray.correct_answer, answerID, questionArray)}
               
            > 
                {answer}
            </button>
        )
    })

 
  
 return (
    <div>
        <h2 className="center">{questionArray.question}</h2>
        <div className='choices-container'>
            {finalArray}
        </div>
    </div>
    
  )
}

export default QuestionPanel