import React, { useState } from 'react';
import {Link,navigate} from '@reach/router';
import { Button } from '@material-ui/core';
import axios from 'axios';

const AddPet = ({setPing}) => {
    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [desc,setdesc] = useState("");
    const [skill,setSkill] = useState("");
    const [errors, setErrors] = useState([]);



    const formHandler= e=> {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", {name,type,desc,skill})
             .then(res =>{
                navigate("/");
                setPing(true);
             })
             .catch(err=>{
                const errRes = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message);
                }
                setErrors(errArr);
             })
    }



    return(
        <div>
            <Link to = '/'>back to home</Link>
            
            <h3>Pet Shelter</h3>
            <p>Know a pet needing a home?</p>



            <form onSubmit={formHandler}>

                {errors.map((err, idx) => {
                    return(
                        <p key={idx} style={{color:"red"}} >{err}</p>
                    )
                })}

                <div className="divForm">
                    <label > pet Name:</label>
                    <br />
                    <input type="text" onChange={(e)=>setName(e.target.value)} />
                    <br />
                    <label > pet Type:</label>
                    <br />
                    <input type="text" onChange={(e)=>setType(e.target.value)} />
                    <br />
                    <label > pet Description:</label>
                    <br />
                    <input type="text" onChange={(e)=>setdesc(e.target.value)} />
                </div>
                
                <div className="divForm">
                        <p>pet skills (optional):</p>

                                <label >skill 1 </label>
                                <br />
                                <input type="text" onChange={(e)=>setSkill(e.target.value)} />
                                <br />

                                <label >skill 2 </label>
                                <br />
                                <input type="text" onChange={(e)=>setSkill(e.target.value)} />
                                <br />

                                <label >skill 3 </label>
                                <br />
                                <input type="text" onChange={(e)=>setSkill(e.target.value)} />
                </div>
                            

                <Button color='blue' type='submit'>Add Pet</Button>
            </form>

        </div>
    )
}

export default AddPet;
