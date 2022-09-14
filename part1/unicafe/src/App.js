import { useState } from "react";

const Button = (props) =>{
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Display = (props) =>{
  return (
    <p>{props.text}: {props.number}</p>
  )
}

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
      <Display text="Good" number={clicks.good} />
      <Display text="Neutral" number={clicks.neutral} />
      <Display text="Bad" number={clicks.bad} />
    </div>
  )


}

export default App;
