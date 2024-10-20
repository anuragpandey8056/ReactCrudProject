import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';




const SearchbyName=()=>{
    const [name,setname]=useState("")
    const [mudata,setdata]=useState([])

    const Handle=(e)=>{
        let empname = e.target.value
        setname(empname); 
        let api = `https://json-server-deployment-4w3v.onrender.com/Data`
        axios.get(api).then((resp)=>{
            console.log(resp.data)
            setdata(resp.data)

        })
    }
    const ans = mudata.map((keys)=>{
          let str= keys.Name.toLowerCase();
          let mystatus = str.includes(name.toLowerCase())
          if(mystatus){
            return(
                <tr>
                    <td>{keys.EnquireNo}</td>
                    <td>{keys.Name}</td>
                    <td>{keys.Email}</td>
                    <td>{keys.Conatct}</td>
                    <td>{keys.About}</td>

                </tr>
            )
          }
            
    })
    return(


        <>
        serachName: <input type="text" value={name} onChange={Handle}/>
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
        
        
        </>



    )


    
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
export default SearchbyName;