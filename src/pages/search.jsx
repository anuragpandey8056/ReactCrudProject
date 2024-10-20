import { message } from "antd";
import axios from "axios";
import { useState,useEffect } from "react";

const Search = () => {
    const [mydata,setdata]=useState([])
    const [eno,seteno]=useState("")
    const loaddata=()=>{
        let api = `https://json-server-deployment-4w3v.onrender.com/Data/?EnquireNo=${eno}`
        axios.get(api).then((resp)=>{
            console.log(resp.data)
            setdata(resp.data)
            if(resp.data.length<=0){
                message.error("data not foud")
            }

        })
     }
    const ans = mydata.map((keys)=>{
        return(
            <>
            <h1>EnquireNo:{keys.EnquireNo}</h1>
            <h2>Name:{keys.Name}</h2>
            <h2>Email:{keys.Email}</h2>
            <h2>Contact:{keys.Contact}</h2>
            <h2>About:{keys.About}</h2>
            
            
            </>
        )
    })
   return(
    <>
       <h1>Empolyees Data</h1>

        







       Enter EnquireNo: <input type="text" value={eno}
       onChange={(e)=>{seteno(e.target.value)}} />
       <button onClick={loaddata}>Go</button>

       {ans}
    </>
   )
}

export default Search;
