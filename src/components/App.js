import React, {useEffect} from 'react'
import OpenScreen from './OpenScreen';
import QuestionPanel from './QuestionPanel'




export default function App() {
  

  useEffect(()=> {
      fetch('https://opentdb.com/api.php?amount=5&type=multiple').then(res => res.json()).then(data=>setQuestions(data.results))
  }, [])
  


  const [questions, setQuestions] = React.useState([])
  const [startScreen, setStartScreen] = React.useState(true)
  const [showQuestionPage, setShowQuestionPage] = React.useState(false)
  const [score, setScore] = React.useState(0)

  const showQuestions = questions.map(question => <QuestionPanel key={question.question} questionArray={question} setScore={setScore}/>)

  function startTest() {
    setStartScreen(prevState => !prevState)
    setShowQuestionPage(prevState => !prevState)
  }

  function playAgain() {
    setScore(0)
    fetch('https://opentdb.com/api.php?amount=5&type=multiple').then(res => res.json()).then(data=>setQuestions(data.results))
  }
 

  return (
    <div className="wrapper">
      {startScreen && (<OpenScreen startTest = {startTest}/>)}    
      {showQuestionPage && showQuestions}
      {score === 5 ? <button onClick={playAgain} className='choices'>Play again</button> : ''}
    </div>
          
  )
}