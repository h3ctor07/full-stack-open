import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const History = ({allClicks}) =>{
  if(allClicks.length === 0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return(
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
} 

const App = () =>{
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightCLick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  console.log(allClicks)
  return(
    <div>
      {left}
      <Button handleClick= {handleLeftClick} text="left" />
      <Button handleClick= {handleRightCLick} text="right" />
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App;