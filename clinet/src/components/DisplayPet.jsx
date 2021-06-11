import React from 'react';
import { Button } from '@material-ui/core';
import {Link, navigate} from '@reach/router';
import { Card } from '@material-ui/core';

const DisplayPet = ({pets, setPing}) =>{


    return(
        <div >
           

          
            <Link  to={"/new"}>add a pet to the ahelter </Link>
            
            <p>These pets are looking for a good home :</p>


 <Card>

            <table className="table">
                <thead className="head">
                    <tr>
                        <th >Name</th>
                        <th > Type</th>
                        <th > Actions</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                {
                        pets.map((pet, idx)=>{
                            return(
                                <tr key={idx}>
                                    <td className="td1">{pet.name}</td>
                                    <td className="td1">{pet.type}</td>
                                    <td>
                                        <Button onClick={()=>{navigate(`/edit/${pet._id}`)}} >Edit</Button> |
                                        <Button onClick={()=>{navigate(`/details/${pet._id}`)}} >Details</Button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
  </Card>
        </div>
    )
}

export default DisplayPet;