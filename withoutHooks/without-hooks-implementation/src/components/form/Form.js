export default function Form (props){
    const { name, email, phone, state, city, country, handleChange, handleSubmit, isCareers, isContact, skill, skillsData, degree, degreesData, experience, experienceLevelsData, contact } = props

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input 
                    onChange={handleChange}
                    name='name' 
                    type='text'
                    value={name}
                />
            </label>
            <label>Email:
                <input 
                    onChange={handleChange}
                    name='email' 
                    type='email'
                    value={email}
                />
            </label>
            <label>Phone:
                <input 
                    onChange={handleChange}
                    name='phone' 
                    type='tel'
                    value={phone}
                />
            </label>
            <label>State:
                <input 
                    onChange={handleChange}
                    name='state' 
                    type='text'
                    value={state}
                />
            </label>
            <label>City:
                <input 
                    onChange={handleChange}
                    name='city' 
                    type='text'
                    value={city}
                />
            </label>
            <label>Country:
                <input 
                    onChange={handleChange}
                    name='country' 
                    type='text'
                    value={country}
                />
            </label>
            { isCareers ? (
                <label>Skill:
                    <select 
                        onChange={handleChange}
                        name='skill' 
                        type='text'
                        value={skill}
                    >
                        {skillsData.map((skill, index) => <option key={index} value={skill}>{skill}</option>)}
                    </select>
                </label>
            ) : null }
            { isCareers ? (
                <label>Degree:
                    <select 
                        onChange={handleChange}
                        name='degree' 
                        type='text'
                        value={degree}
                    >
                        {degreesData.map((degree, index) => <option key={index} value={degree}>{degree}</option>)}
                    </select>
                </label>
            ) : null }
            { isCareers ? (
                <label>Experience:
                    <select 
                        onChange={handleChange}
                        name='experience' 
                        type='text'
                        value={experience}
                    >
                        {experienceLevelsData.map((experience, index) => <option key={index} value={experience}>{experience}</option>)}
                    </select>
                </label>
            ) : null }
            { isContact ? (
                <label>Contact:
                    <input 
                        onChange={handleChange}
                        name='contact' 
                        type='text'
                        value={contact}
                    />
                </label>
            ) : null }
            <input id="submit-button" type="submit" value="Submit" />
        </form>
    )
}