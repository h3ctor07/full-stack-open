const App = () =>{
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
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
  console.log(props)
  return <p>Number of exercises: {props.parts.reduce((partialSum, a) => partialSum + a.exercises, 0)}</p>
}
export default App;