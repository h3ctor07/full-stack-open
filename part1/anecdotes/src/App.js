import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const QuoteSection = ({title, quote, points}) => (
  <>
    <h1>{title}</h1>
    <p>{quote}</p>
    <p>has {points} votes</p>
  </>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  const maxIndex =  points.indexOf(Math.max(...points))

  const randomize = () => {
    let randomNumber
    do{
       randomNumber = Math.floor(Math.random() * (anecdotes.length))
       console.log(randomNumber)
    }
    while(randomNumber == selected)
    setSelected(randomNumber)
  }

  const addVote = () =>{
    const newPoints = [...points]
    newPoints[selected]++
    setPoints(newPoints)
  }

  return (
    <div>
      <QuoteSection title="Anecdote of the day" quote={anecdotes[selected]} points={points[selected]} />
      <Button onClick={addVote} text="Vote" />
      <Button onClick={randomize} text="Next Quote"/>
      <QuoteSection title="Anecdote with most votes" quote={anecdotes[maxIndex]} points={points[maxIndex]} />
    </div>
  )
}

export default App;
