import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const ListView = () => {
    const [ pets, setPets ] = useState([]);

    const styles = {
        center: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setPets(res.data)
            })
            .catch(err => console.log("Error: ", err))
    }, [pets]);

    return (
        <div style={styles.center}>
            <h1>Pet Shelter</h1>
            <h4>These pets are looking for a good home</h4>

            <Link to={'/pets/new'}>
                <h6>Add a pet to the shelter</h6>
            </Link>
            
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pets.map((pet, i) => {
                            return <tr key={i}>
                                        <td>{ pet.name }</td>
                                        <td>{ pet.type }</td>
                                        <td>
                                            <Link to={ `/pets/${ pet._id}` }>details</Link> || <Link to={ `/pets/${ pet._id}/edit` }>Edit</Link></td>
                                    </tr>
                        })}
                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default ListView;