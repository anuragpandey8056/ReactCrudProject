import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// Import necessary components from react-bootstrap
import { Form, Col, Row } from 'react-bootstrap'; 
import { message } from "antd";

const Modify = () => {
    const { myid } = useParams();
    const [mydata, setmydata] = useState({
      
    });

    const loaddata = () => {
        let api = `https://json-server-deployment-4w3v.onrender.com/Data/${myid}`;
        axios.get(api).then((resp) => {
            console.log(resp.data);
            setmydata(resp.data);
        });
    };

    useEffect(() => {
        loaddata();
    },[]); 

    const HandleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setmydata((values) => ({ ...values, [name]: value }));
    };

    const HandleSubmit = () => {
        let api = `https://json-server-deployment-4w3v.onrender.com/Data/${myid}`;
        axios.put(api, mydata).then((resp) => {
            message.success("Updated successfully");
            setmydata({
                EnquireNo: '',
                Name: '',
                Email: '',
                Contact: '',
                About: ''

            })
          
        });
       
    };

    return (
        <>
            <h1>Modify</h1>

            <Form.Group as={Row} className="mb-3" controlId="formBasicEnquireNo">
                <Form.Label column sm={2}>
                    Enquire No
                </Form.Label>
                <Col sm={10}>
                    <Form.Control 
                        type="text" 
                        name="EnquireNo" 
                        value={mydata.EnquireNo} 
                        placeholder="Enter Enquire No" 
                        onChange={HandleInput} 
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicName">
                <Form.Label column sm={2}>
                    Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control 
                        type="text" 
                        name="Name" 
                        value={mydata.Name } 
                        placeholder="Enter Name" 
                        onChange={HandleInput} 
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control 
                        type="email" 
                        name="Email" 
                        value={mydata.Email } 
                        placeholder="Enter Email" 
                        onChange={HandleInput} 
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicContact">
                <Form.Label column sm={2}>
                    Contact
                </Form.Label>
                <Col sm={10}>
                    <Form.Control 
                        type="text" 
                        name="Contact" 
                        value={mydata.Contact } 
                        placeholder="Enter Contact" 
                        onChange={HandleInput} 
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicAbout">
                <Form.Label column sm={2}>
                    About
                </Form.Label>
                <Col sm={10}>
                    <Form.Control 
                        type="text" 
                        name="About" 
                        value={mydata.About } 
                        placeholder="About" 
                        onChange={HandleInput} 
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <button onClick={HandleSubmit}>Submit</button>
                </Col>
            </Form.Group>
        </>
    );
};

export default Modify;
