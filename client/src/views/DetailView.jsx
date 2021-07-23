import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AdoptButton from '../components/AdoptButton';

const DetailView = (props) => {
    const { id, navigate } = props;
    const [ pet, setPet ] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setPet(res.data[0]);
            })
            .catch(err => console.log('Error: ', err));
    }, [id]);

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>Details about: {pet.name}</h3>
            <Link to={'/'} >
                <h6>Back to home</h6>
            </Link>
            <AdoptButton petName={ pet.name } petId={ pet._id } navigate={ navigate } />
            <div>
                <p>Pet type: { pet.type }</p>
                <p>Pet description: { pet.description }</p>
                <p>Pet skills: { pet.skillOne } <br /> { pet.skillTwo } <br /> { pet.skillThree }</p>
            </div>

        </div>
    )
}

export default DetailView;