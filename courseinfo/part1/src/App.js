const App = () =>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

const Header = (props) =>{
  return (<h1>{props.course}</h1>)
}

const Content = (props) =>{
  return (
    <>
      <Part index={0} this={props}/>
      <Part index={1} this={props}/>
      <Part index={2} this={props}/>
    </>
  )
}

const Total = (props) =>{
  return <p>Number of exercises: {props.exercises.reduce((partialSum, a) => partialSum + a, 0)}</p>
}
export default App;

const Part = (props) =>{
  return(
    <p>{props.this.parts[props.index]} {props.this.exercises[props.index]}</p>
  )
}
