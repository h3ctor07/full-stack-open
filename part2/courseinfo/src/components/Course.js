const Part = ({ part }) => (
    <p>{part.name} {part.exercises}</p>
  )
  
  const Content = ({ parts }) => {
  
    const total = parts.reduce((sum, part) =>
      sum + part.exercises
      , 0
    )
  
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
        <p><strong>total of {total} exercises</strong></p>
      </div>
    )
  }
  
  const Header = ({ name }) => (
    <h1>{name}</h1>
  )
  
  const Course = ({ courses }) => (
    courses.map(course =>(
      <div key={course.id}>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
    ))
  )

  export default Course