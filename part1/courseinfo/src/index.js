import React from 'react';
import ReactDOM from 'react-dom';


const Part = (props) => {
    return (
        <>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </>
    )
}


const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <Part part={props.part[0]} />
            <Part part={props.part[1]} />
            <Part part={props.part[2]} />
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
        </>
    )
}




const App = () => {
    const course = 'Half Stack application development'
    const part = [
        {
            name:'Fundamentals of React' ,
            exercises: 10
        },
        {
            name: 'Using props to pass data' ,
            exercises: 7
        },
        {
            name:'State of a component' ,
            exercises: 14
        }
    ]


    return (
        <>
            <Header course={course}/>
            <Content part={part} />            
            <Total part={part} />                        
        </>
    )

}


ReactDOM.render(<App />, document.getElementById('root'));

