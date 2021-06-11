import React, { useEffect, useState } from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios';
import { Button } from '@material-ui/core';

const EditPet = ({id, setPing}) =>{
    const [name, setName] = useState(" ");
    const [type,setType] = useState("");
    const [desc,setdesc] = useState("");
    const [skill,setSkill] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/" + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setdesc(res.data.desc);
                setSkill(res.data.skill);

            })
            .catch(err => console.log(err))

    },[id])

    const formHandler = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/pets/" + id, {name,type,desc,skill})
            .then(res => {
                navigate("/");
                setPing(true);
            })
            .catch(err => {
                console.log(err);
                const errRes = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message);
                }
                setErrors(errArr);
            })
    }


    return(
        
        name !== "" ?
            <div>
            <p>Edit Garfield</p>
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
                <br />  

                <Button color='blue' type='submit'>Edit Pet</Button>
            </form>

        </div>

    :
    <div>
        <h4>We're sorry, but we could not find the author you are looking for. <br />
        Would you like to add this author to our database?</h4>
        <button onClick={() => navigate("/new")} >Yes</button>
    </div>
    )
}
export default EditPet;