import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import PetForm from '../components/PetForm';

const NewView = (props) => {
    const { navigate } = props;
    const [ pets, setPets ] = useState([]);
    const [ errors, setErrors ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setPets(res.data)
            })
            .catch(err => console.log('Error: ', err));
    }, []);

    const createPet = pet => {
        axios.post('http://localhost:8000/api/pets/new', pet)
            .then(res => {
                setPets(res.data);
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];

                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }

                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>Know a pet needing a home?</h3>
            <Link to={'/'} >
                <h6>Back to home</h6>
            </Link>

            <PetForm 
                onSubmitProp={ createPet } 
                errors={ errors } 
                initialName=""
                initialType=""
                initialDescription=""
                initialSkillOne=""
                initialSkillTwo=""
                initialSkillThree=""
                />
        </div>
    )
}

export default NewView;