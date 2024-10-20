import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Delimg from "../Images/deleteimg.png"
import imgedit from "../Images/images.png"
import { message } from "antd"
    ;
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const [mydata, setdata] = useState([]);
    const navigate = useNavigate();

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

    const Del = (id) => {
        let url = `https://json-server-deployment-4w3v.onrender.com/Data/${id}`
        axios.delete(url).then((resp) => {
            console.log(resp)
            message.error("data deleted ")
            loaddata();
        })
    }
    const Editdata=(id)=>{
          navigate(`/editrec/${id}`)
    }

    const ans = mydata.map((keys, index) => {
        return (
            <tr key={index} style={styles.row}>
                <td>{index + 1}</td>
                <td>{keys.EnquireNo}</td>
                <td>{keys.Name}</td>
                <td>{keys.Contact}</td>
                <td>{keys.Email}</td>
                <td>{keys.About}</td>
                <td>
                    <a style={{ marginRight: "10px" }} href="#" onClick={(() => { Del(keys.id) })}>
                        <img src={Delimg} alt="" width="40px" height="30px" />

                    </a>

                    <a href="#" onClick={(() => { Editdata(keys.id) })}>
                        <img src={imgedit} alt="" width="40px" height="30px" />

                    </a>
                </td>
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
                        <th>Delete/Edit</th>


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
        fontFamily: "Playwrite GB S cursive",
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

export default Edit;
