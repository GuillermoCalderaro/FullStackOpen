import React from 'react';
import ReactDOM from 'react-dom';


const Part = ({name, exercises}) => {

    return (<p>{name} {exercises}</p>)
}

const Content = ({parts}) => {


    const cont = () => 
        parts.map(part => {
            
            return(
            <Part key={part.id}
                name={part.name}
                exercises={part.exercises} />)   
            }
        )

    const totalExercises = () => 
        parts.reduce ( (a, b) =>{             
                return a + b.exercises
            },0 
        )

    return  (     
        <>
                {cont()}
                <p>total of {totalExercises()} exercises</p>
        </>
    )
}


const Header = ({name}) =>  {
    return (<h1>{name}</h1>)
}

const Course = ({course}) => (
    <>
        <Header name={course.name} />
        <Content parts={course.parts}/>
    </>
)

const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
  
    return (
      <div>
        <Course course={course} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

