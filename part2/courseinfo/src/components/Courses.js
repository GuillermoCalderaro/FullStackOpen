import React from 'react'

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

export default Courses