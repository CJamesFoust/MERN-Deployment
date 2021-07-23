import React from 'react';
import axios from 'axios';

const AdoptButton = (props) => {
    const { petId, navigate, petName } = props;

    const adoptPet = (e) => {
        axios.delete('http://localhost:8000/api/pets/' + petId)
            .then(res => {
                navigate('/');
            })
    }

    return (
        <button onClick={ adoptPet }>Adopt { petName }</button>
    )
}

export default AdoptButton;