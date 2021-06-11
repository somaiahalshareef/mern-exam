import React,{useState,useEffect}from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios';
import { Card } from '@material-ui/core';
// import { Button } from '@material-ui/core';

const Details = ({id,setPing})=>{
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/'+ id )
            .then(res => setPets(res.data))
            .catch(err=>console.log(err));        
    }, [id]);

  

     const deleteHandler =(id) =>{
        axios.delete("http://localhost:8000/api/pets/" + id)
        .then(res =>{
            navigate("/");
            setPing(true);
         })
        .catch(err => console.log(err))
    }

return(
    <div>
    
        <button className="button" onClick={() => deleteHandler(pets._id)} >Adopt Grafield</button>


        <div className="card">
             <Card>
        
        <h1>Details about : {pets.name}</h1>
        <div className="info">
            <p>pet type:{pets.type}</p>
            <p>Description :{pets.desc}</p>
            <p>skills:{pets.skill}</p>
        </div>        
        
        </Card>
        </div>
       
       

    </div>
)
}

export default Details;