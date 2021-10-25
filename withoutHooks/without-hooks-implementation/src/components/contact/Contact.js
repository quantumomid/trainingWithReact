import React from "react";
import Form from '../form/Form'
import './Contact.css'

const initialState ={
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    country: "",
    contact: ""
}

export default class Contact extends React.Component{
    constructor(){
        super()
        this.state=initialState
    }

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
        const { name, email, phone, state, city, country, contact } = this.state

        return (
            <div className="contacts-container">
                <h3>Contact Us</h3>
                <Form 
                    name={name}
                    email={email}
                    phone={phone}
                    state={state}
                    city={city}
                    country={country}
                    contact={contact}
                    handleChange={this.handleChange}
                    isContact={true}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}
