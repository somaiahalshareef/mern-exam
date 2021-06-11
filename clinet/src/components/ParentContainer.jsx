import React ,{useState,useEffect} from'react';
import axios from 'axios';
import { Router } from "@reach/router";
import DisplayPet from './DisplayPet';
import AddPet from './AddPet'
import EditPet from './EditPet';
import Details from './Details';
import { Link, navigate } from "@reach/router";






const ParentContainer = () => {
    const [pets, setPets] = useState([]);
    const [ping, setPing] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                setPets(                                     
                    res.data.sort(function(a, b) {             
                        return a.name.localeCompare(b.name);    
                    })                                          
                );

                setPing(false);
            })
            .catch(err=>console.log(err));
    }, [ping]);

return (
    
    <div className="main">
        <nav className="nav">
            
            <h1>Pet Shelter</h1>
            <Link to = '/'>back to home</Link>
            
        </nav>
        
        <Router>
            <AddPet path="/new" setPing={setPing}  />
            <DisplayPet path={"/"} authsetPing={setPing} pets={pets} setPing={setPing}/>
            <EditPet path= "/edit/:id"  setPing={setPing} />
            <Details path="/details/:id"  setPing={setPing} pets={pets} />
        </Router>
        
    </div>
)}

export default ParentContainer;
