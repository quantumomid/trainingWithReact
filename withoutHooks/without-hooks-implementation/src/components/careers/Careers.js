import React from "react";
import './Careers.css'
import Form from '../form/Form'
import { careersData } from "../../data/careersData.js";

const initialState ={
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    country: "",
    skill: "",
    degree: "",
    experience: ""
}

export default class Careers extends React.Component{
    constructor(){
        super()
        this.state=initialState
    }
    // componentDidMount(){
    //     console.log(careersData)
    // }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.setState(initialState)
    }

    render(){
        const { name, email, phone, state, city, country, skill, degree, experience } = this.state

        return (
            <div className="careers-container">
                <h3>Careers</h3>
                <Form 
                    name={name}
                    email={email}
                    phone={phone}
                    state={state}
                    city={city}
                    country={country}
                    skill={skill}
                    skillsData={careersData.skills}
                    degree={degree}
                    degreesData={careersData.degrees}
                    experience={experience}
                    experienceLevelsData={careersData.experienceLevels}
                    handleChange={this.handleChange}
                    isCareers={true}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}