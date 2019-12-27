import React from 'react';
import ReactDOM from 'react-dom';


const Part = (props) => {
    
    const {name, exercises, id} = props
    return (<p key={id}>{name} {exercises}</p>)
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
    return (<h2>{name}</h2>)
}

const Course = ({course}) => {
    return (
    <>
        <Header name={course.name} />
        <Content parts={course.parts}/>
    </>)
}

const DisplayHeader = ({heading}) =>    (
        <h1>{heading}</h1>
    )


const Courses = ({courses}) => {
    const heading = 'Web Development Curriculum'


    const displayCourses = () => 
        courses.map((course) =>  (<Course key={course.id} course={course}/>)
          
        )
    

        return (
            <>
                <DisplayHeader heading={heading} />
                {displayCourses()}
                
            </>
        )
    }


const App = () => {

    const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

    
    return (
      <div>
        <Courses courses={courses} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

