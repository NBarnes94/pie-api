import React, { useState } from 'react';
import './Auth.css';

const Auth = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);


    const title = () =>{
        return login? 'Login' : 'Signup';
        // if login is true, return Login. If login is false, return Signup
    }

    const loginToggle = (event) =>{
        //Takes in an event so we can stop the page from reloading on form submission
        event.preventDefault();

        setLogin(!login);
        //set login to the opposite of its current value 

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const signupFields = () => !login ?

    (
        <div>
            <label htmlFor="firstName">First Name:</label>
            <br />
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.vale)} />
            <br />
            <label htmlFor="lastName">Last Name:</label>
            <br />
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
    ) : null;

//*   If login was false, we want to show the additional fields. If login is true, show nothing(null)

    return (
        <div>
            <form>
                <h1>Login</h1>
                <br />
                {signupFields()}
                <label htmlFor='email'>Email:</label>
                <br />
                <input type="text" id='email' value={email} onChange={(e) => setEmail(console.log(e), e.target.value)} />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input type="password" id="password" value={password} onChange={(e) => setPassword(console.log(e), e.target.value)} />
                <br />
                <button onClick={loginToggle} >Login/Sign-up Toggle</button>
                <br />
                <button type='submit'>Submit User Data</button>

            </form>
        </div>
    )
}

/*
-if we take out onChange handler, the value is locked because the value is an empty string
-the onChange handler takes in an anonymous function that will set the state of our variables to what we type in the input 
* Two-way-binding: This is essentially a circuit. 
    -the data comes in and changes the stat variable via setEmail/setPassword, and the state variable is tied to the input field the value attribute. 

*/

export default Auth;