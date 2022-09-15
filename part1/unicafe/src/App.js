import { useState } from "react";

const Button = (props) =>{
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = ({clicks}) =>{
  const all = Object.values(clicks).reduce((prev, current) => prev + current, 0)
  const avg = (clicks.good - clicks.bad) / all
  const pos = `${(clicks.good / all) *100}%`
    
  if (Object.values(clicks).every(x => x === 0)){
    return <p>No feedback given</p>
  }

  return(
    <table>
      <tbody>
      <StatisticLine text="good" number={clicks.good} />
      <StatisticLine text="neutral" number={clicks.neutral} />
      <StatisticLine text="bad" number={clicks.bad} />
      <StatisticLine text="all" number={all} />
      <StatisticLine text="average" number={avg} />
      <StatisticLine text="positive" number={pos} />
      </tbody>
    </table>    
  )
}

const StatisticLine = ({text, number}) => (<tr><td>{text}</td><td>{number}</td></tr>)

const App = () =>{
  const [clicks, setClicks] = useState({good: 0, neutral:0, bad: 0})

  const handleClick = (value) => () =>{
    setClicks({...clicks, [`${value}`]: clicks[value] + 1 })
  }


  console.log(clicks)

  return(
    <div>
      <h1>give feedback</h1>
      <Button text="Good" onClick={handleClick("good")} />
      <Button text="Neutral" onClick={handleClick("neutral")} />
      <Button text="Bad" onClick={handleClick("bad")} />
      <h2>statistics</h2>
      <Statistics clicks = {clicks} />
    </div>
  )


}

export default App;
