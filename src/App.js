import Tit from "./Tit";
import Text from "./Text";
import Result from "./Result";

const App = () => {
  const course = 'Full Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 4
  const part2 = 'Using props to pass data'
  const exercises2 = 2
  const part3 = 'State of a component'
  const exercises3 = 1

  return (
    <div>
      <Tit prueba={course}/>

      <Text par={part1} exe={exercises1}/>
      <Text par={part2} exe={exercises2}/>
      <Text par={part3} exe={exercises3}/>

      <Result  ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

export default App
