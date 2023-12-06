const Header = ({ name }) => {
    return <h2>{name}</h2>
  }
  
  const Part = (props) => {
    return <p>{props.part} {props.exercise}</p>
  }
  
  const Content = ({ parts }) => {
    return parts.map(   ({ id, name, exercises }) => <Part key={id} part={name} exercise={exercises} />    )
  }
  
  const Total = ({ parts }) => {
    const exercises = parts.map(part => part.exercises)
    console.log("ex", exercises)
    const sum = exercises.reduce((total, i) => total + i, 0)
    return <p>Total amount of exercises: {sum} </p>
  }
  
  const Course = ({ course }) => {
    const { name, parts } = course
    console.log("parts", parts)
    console.log("name", name)
    return (
      <>
        <Header name={name} />
        <Content parts={parts} />
        <Total parts={parts} />
      </>
    )
  }

export default Course