import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetForm from '../components/PetForm';
import { Link } from '@reach/router';


const UpdateView = (props) => {
    const { id, navigate } = props;
    const [ pet, setPet ] = useState();
    const [ errors, setErrors ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                console.log(res.data[0]);
                setPet(res.data[0]);
                setLoaded(true);
            })
    }, [id])

    const updatePet = (pet) => {
        axios.put('http://localhost:8000/api/pets/' + id, pet)
            .then(res => navigate('/pets/' + id))
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
            <Link to={'/'} >
                <h6>Back to home</h6>
            </Link>
            { loaded && (
                <>
                    <h3>Edit { pet.name } </h3>
                    <PetForm
                        onSubmitProp={ updatePet }
                        initialName={ pet.name }
                        initialType={ pet.type }
                        initialDescription={ pet.description }
                        initialSkillOne={ pet.skillOne }
                        initialSkillTwo={ pet.skillTwo }
                        initialSkillThree={ pet.skillThree }
                        errors={ errors }
                        />
                </>
            )}

        </div>
    )
}

export default UpdateView;