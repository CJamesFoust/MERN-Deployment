import React, { useState } from 'react';

const PetForm = (props) => {
    const { onSubmitProp, 
            errors, 
            initialName, 
            initialType, 
            initialDescription, 
            initialSkillOne, 
            initialSkillTwo, 
            initialSkillThree } = props;
            
    const [name, setName ] = useState(initialName);
    const [ type, setType ] = useState(initialType);
    const [ description, setDescription ] = useState(initialDescription);
    const [ skillOne, setSkillOne ] = useState(initialSkillOne);
    const [ skillTwo, setSkillTwo ] = useState(initialSkillTwo);
    const [ skillThree, setSkillThree ] = useState(initialSkillThree);

    const styles = {
        mt: {
            margin: "20px"
        }
    }

    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name, type, description, skillOne, skillTwo, skillThree });
    }

    return (
        <div>
            {errors ? errors.map((err, index) => <small key={ index }> { err } <br /></small> ) : <small></small>}
            <form onSubmit={ onFormSubmitHandler }>

                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={ name } onChange={(e) => setName(e.target.value)} />
                </div>
                
                <div>
                    <label>Type</label>
                    <input type="text" name="type" value={ type } onChange={(e) => setType(e.target.value)} />
                </div>

                <div>
                    <label>Description</label>
                    <input type="text" name="description" value={ description } onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div style={ styles.mt } >
                    <label>Skills (Optional)</label>
                </div>

                <div>
                    <label>Skill One</label>
                    <input type="text" name="skillOne" value={ skillOne } onChange={(e) => setSkillOne(e.target.value)} />
                </div>

                <div>
                    <label>Skill Two</label>
                    <input type="text" name="skillTwo" value={ skillTwo } onChange={(e) => setSkillTwo(e.target.value)} />
                </div>

                <div>
                    <label>Skill Three</label>
                    <input type="text" name="skillThree" value={ skillThree } onChange={(e) => setSkillThree(e.target.value)} />
                </div>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default PetForm;