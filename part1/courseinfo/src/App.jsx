const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Part = (props) => {
  return (
    <p>{props.part} {props.exercise} </p>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} exercise={props.exercises[0]} />
      <Part part={props.parts[1]} exercise={props.exercises[1]} />
      <Part part={props.parts[2]} exercise={props.exercises[2]} />
    </div>
  )
}


const Total = (props) => {
  return (
    <p>Number of exercises {props.total} </p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} exercises={exercises}/>
      <Total total={exercises.reduce((acc, val) => acc + val, 0)} />
    </>
  )
}

export default App