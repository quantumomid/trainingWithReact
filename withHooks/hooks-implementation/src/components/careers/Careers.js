import React, {useState} from "react";
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

export default function Careers (){

    const [ formData, setFormData ] = useState(initialState)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        setFormData(initialState)
    }

    return (
        <div className="careers-container">
        <h3>Careers</h3>
        <Form 
            name={formData.name}
            email={formData.email}
            phone={formData.phone}
            state={formData.state}
            city={formData.city}
            country={formData.country}
            skill={formData.skill}
            skillsData={careersData.skills}
            degree={formData.degree}
            degreesData={careersData.degrees}
            experience={formData.experience}
            experienceLevelsData={careersData.experienceLevels}
            handleChange={handleChange}
            isCareers={true}
            handleSubmit={handleSubmit}
        />
    </div>
    )
}

// // For alternative implementations see Contact.js and METHODs 1 and 2 therein!