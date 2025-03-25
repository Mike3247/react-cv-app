import React, {useState, useEffect} from 'react';

const GeneralInformation = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

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
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            />
            <label for="email">Email</label>
            <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
            <input
            type="text"
            id="phonenNumber"
            name="phoneNumber"
            placeholder="123 455 5555"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            />
        </form>
        <h1>{fullName} <br />
            {email} <br />
            {phoneNumber}
            </h1>

        </div>
        
    )
}

export default GeneralInformation;