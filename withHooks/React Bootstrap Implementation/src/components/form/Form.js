import { Button, Form, FloatingLabel, Container, Row, Col } from 'react-bootstrap';


export default function ReactBootstrapForm (props){
    const { name, email, phone, state, city, country, handleChange, handleSubmit, isCareers, isContact, skill, skillsData, degree, degreesData, experience, experienceLevelsData, contact } = props

    return (

        <Container>
            <Form onSubmit={handleSubmit}>

                <Row>
                    <Col sm md>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={name} type="text" placeholder="Enter name" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col sm md>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" value={email} type="email" placeholder="Enter email" onChange={handleChange} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col sm md>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control name="phone" value={phone} type="text" placeholder="Enter phone" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control name="state" value={state} type="text" placeholder="Enter state" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control name="city" value={city} type="text" placeholder="Enter city" onChange={handleChange} />
                        </Form.Group>

                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Control name="country" value={country} type="text" placeholder="Enter country" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
            
                <Row>
                    <Col sm>
                        { isCareers ? (
                        <FloatingLabel controlId="floatingSelect" label="Skills">
                            <Form.Select aria-label="Floating label select example" onChange={handleChange} name='skill' type='text' value={skill}>
                                {skillsData.map((skill, index) => <option key={index} value={skill}>{skill}</option>)}
                            </Form.Select>
                        </FloatingLabel>
                        ) : null }
                    </Col>
                    <Col sm>
                        { isCareers ? (
                        <FloatingLabel controlId="floatingSelect" label="Degree">
                            <Form.Select aria-label="Floating label select example" onChange={handleChange} name='degree' type='text' value={degree}>
                                {degreesData.map((degree, index) => <option key={index} value={degree}>{degree}</option>)}
                            </Form.Select>
                        </FloatingLabel>
                        ) : null }
                    </Col>
                    <Col sm>
                        { isCareers ? (
                        <FloatingLabel controlId="floatingSelect" label="Experience">
                            <Form.Select aria-label="Floating label select example" onChange={handleChange} name='experience' type='text' value={experience} >
                                {experienceLevelsData.map((experience, index) => <option key={index} value={experience}>{experience}</option>)}
                            </Form.Select>
                        </FloatingLabel>
                        ) : null }
                    </Col>
                </Row>

                { isContact ? (
                    <Form.Group className="mb-3">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control name="contact" value={contact} type="text" placeholder="Enter contact" onChange={handleChange} />
                    </Form.Group>
                ) : null }

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>    
        </Container>
        
        )
}