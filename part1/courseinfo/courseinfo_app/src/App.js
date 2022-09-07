const App = () =>{
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [part1, part2, part3]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

const Header = (props) =>{
  return (<h1>{props.course}</h1>)
}

const Content = (props) =>{
  return (
    <>
      <Part index={0} parts={props.parts}/>
      <Part index={1} parts={props.parts}/>
      <Part index={2} parts={props.parts}/>
    </>
  )
}

const Part = (props) =>{
  return(
    <p>{props.parts[props.index].name} {props.parts[props.index].exercises}</p>
  )
}

const Total = (props) =>{
  return <p>Number of exercises: {props.parts.reduce((partialSum, a) => partialSum + a.exercises, 0)}</p>
}
export default App;