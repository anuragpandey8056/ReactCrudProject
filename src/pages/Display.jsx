import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const Display = () => {
    const [mydata, setdata] = useState([]);

    const loaddata = () => {
        let api = "https://json-server-deployment-4w3v.onrender.com/Data";
        axios.get(api).then((res) => {
            console.log(res.data);
            setdata(res.data);
        });
    };

    useEffect(() => {
        loaddata();
    }, []);

    const ans = mydata.map((keys, index) => {
        return (
            <tr key={index} style={styles.row}>
                <td>{index + 1}</td>
                <td>{keys.EnquireNo}</td>
                <td>{keys.Name}</td>
                <td>{keys.Contact}</td>
                <td>{keys.Email}</td>
                <td>{keys.About}</td>
            </tr>
        );
    });

    return (
        <div style={styles.tableContainer}>
            <Table striped bordered hover responsive="sm" style={styles.table}>
                <thead style={styles.header}>
                    <tr>
                        <th>#</th>
                        <th>Enquire No</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>About</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </Table>
        </div>
    );
};

const styles = {
    tableContainer: {
        padding: '20px',
        fontFamily:"Playwrite GB S cursive",
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '20px',
        overflowX: 'auto' // Ensures responsiveness for smaller screens
    },
    table: {
        borderCollapse: 'separate',
        borderSpacing: '0',
        backgroundColor: 'white',
        borderRadius: '8px',
        width: '100%',
        textAlign: 'center'
    },
    header: {
        backgroundColor: '#343a40',
        color: 'white',
        fontWeight: 'bold',
        borderBottom: '3px solid #dc3545'
    },
    row: {
        padding: '12px 15px',
        textAlign: 'center'
    }
};

export default Display;
