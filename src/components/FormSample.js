import { useState } from "react";


function FormSample(){

    const [formInput, setFormInput] = useState({name : 'Prakash'});

    function changeForms(event){
        const name = event.target.name;
        const value = event.target.value;
        setFormInput(previous => {return {...previous, [name] : value}});
    }

    function submitForm(event){
        event.preventDefault();
        console.log("Check the form input - ", formInput);
    }
    
    return <>
        <form onSubmit={submitForm}>
            <h1>Form Submission....</h1>
            <label>Enter your name : <input type="text" name="name" onChange={changeForms} value={formInput.name} /><br></br></label>
            <label>Enter your age : <input type="text" name="age" onChange={changeForms} /><br></br></label>

            <input type="submit" value="Submit" />
        </form>
    </>;
}

export default FormSample;