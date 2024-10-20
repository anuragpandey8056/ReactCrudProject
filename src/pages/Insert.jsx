import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';

const Insert = () => {
    const [inpu, setinput] = useState({})

    const HandleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setinput((values) => ({ ...values, [name]: value }));
        console.log(inpu);
    }

    const HandleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        let url = "http://localhost:3000/Data";
        axios.post(url, inpu).then((resp) => {
            console.log(resp);
            toast.success("Data Saved Successfully");
        }).catch((error) => {
            console.error(error);
            toast.error("Failed to Save Data");
        });
    }

    return (
        <>
            <Form onSubmit={HandleSubmit} style={{ fontFamily: "Playwrite GB S cursive" }}>
                <Form.Group as={Row} className="mb-3" controlId="formBasicEnquireNo">
                    <Form.Label column sm={2}>
                        Enquire No
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name='EnquireNo' placeholder="Enter Enquire No" onChange={HandleInput} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicName">
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name='Name' placeholder="Enter Name" onChange={HandleInput} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" name='Email' placeholder="Enter Email" onChange={HandleInput} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicContact">
                    <Form.Label column sm={2}>
                        Contact
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name='Contact' placeholder="Enter Contact" onChange={HandleInput} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicAbout">
                    <Form.Label column sm={2}>
                        About
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name='About' placeholder="About" onChange={HandleInput} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicCheckbox">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check
                            type="checkbox"
                            label="Check me out"
                            inline
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
            <ToastContainer />
        </>
    );
}

export default Insert;
