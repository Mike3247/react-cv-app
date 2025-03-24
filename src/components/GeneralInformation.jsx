import React, {useState, useEffect} from 'react';

const GeneralInformation = (props) => {
    const [value, setValue] = useState("");

    return (
        <div>
        <h1>General Information</h1>
        <h2>General Information Form</h2>
        <form className="generalInformation" action="localhost:5173" method='post'>
            <label for="fullName">Full Name:</label>
            <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="First and last name"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            />
        </form>
        <h1>{value}</h1>
        </div>
        
    )
}

export default GeneralInformation;