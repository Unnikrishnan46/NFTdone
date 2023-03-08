import React from 'react'
import axios from 'axios';

const admin = () => {

    const myData = {
        email: 'admin003@gmail.com',
        password: '123456789',
    };



    const submitData = async () => {
        console.log("Button clicked")
        try {
            const response = await axios.post('/api/v1/users/adminLogin', myData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <h1>Admin login</h1><br></br>

            <label htmlFor="email">Email address</label>
            <input type="email" name="email" placeholder="" /><br></br>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="" />

            <button onClick={submitData} type="button">Submit</button>

        </div>
    )
}

export default admin
