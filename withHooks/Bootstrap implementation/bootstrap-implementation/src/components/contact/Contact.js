import React, {useState} from "react";
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

export default function Contact (){

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

    return(
        <div className="contacts-container">
            <h3>Contact Us</h3>
            <Form 
                name={formData.name}
                email={formData.email}
                phone={formData.phone}
                state={formData.state}
                city={formData.city}
                country={formData.country}
                contact={formData.contact}
                handleChange={handleChange}
                isContact={true}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

// Method 2
// // USING SEPARATE STATES FOR EACH INPUT FIELD
// export default function Contact (){
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [phone, setPhone] = useState("")
//     const [state, setState] = useState("")
//     const [city, setCity] = useState("")
//     const [country, setCountry] = useState("")
//     const [contact, setContact] = useState("")

//     const handleChange = (event) => {
//         const { name, value } = event.target

//         switch(name){
//             case 'name': {
//                 setName(value)
//                 break
//             }
//             case 'email': {
//                 setEmail(value)
//                 break
//             }
//             case 'phone': {
//                 setPhone(value)
//                 break
//             }
//             case 'state': {
//                 setState(value)
//                 break
//             }
//             case 'city': {
//                 setCity(value)
//                 break
//             }
//             case 'contact': {
//                 setContact(value)
//                 break
//             }
//             default: 
//             return
//         }
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         console.log(name, email, phone, state, city, contact)
//         setName("")
//         setEmail("")
//         setPhone("")
//         setState("")
//         setCity("")
//         setContact("")
//     }

//     return(
//         <div className="contacts-container">
//             <h3>Contact Us</h3>
//             <Form 
//                 name={name}
//                 email={email}
//                 phone={phone}
//                 state={state}
//                 city={city}
//                 country={country}
//                 contact={contact}
//                 handleChange={handleChange}
//                 isContact={true}
//                 handleSubmit={handleSubmit}
//             />
//         </div>
//     )
// }

// METHOD 3: 
// Similar to METHOD 2 above but without a handleChange function - instead just pass the setName, setEmail, etc. as props in Form component and use their to set state