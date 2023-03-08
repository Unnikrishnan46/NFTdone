import React from "react";
import axios from 'axios';
//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import LoginAndSignUp from "../loginAndSignUp/loginAndSignUp";

const signUp = () => {

  const myData = {
    name: 'John',
    email: 'john@example.com',
    password:'123456789',
    passwordConfirm: '123456789',
  };

  const submitData = async () => {
    console.log("Button clicked")
    try {
      const response = await axios.post('/api/v1/users/signup', myData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


return (
<div className={Style.login}>
  <div className={Style.login_box}>
    <h1>SignUp</h1>
    {/*
    <LoginAndSignUp /> */}

      <label htmlFor="name">User name</label>
      <input type="text" name="name" placeholder="" />

      <label htmlFor="email">Email address</label>
      <input type="email" name="email" placeholder="" />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="" />

      <label htmlFor="passwordConfirm">confirm password</label>
      <input type="password" name="passwordConfirm" placeholder="" />

      <button onClick={submitData} type="button">Submit</button>


    <p className={Style.login_box_para}>
      New user? <a href="#">Create an account</a>
    </p>
  </div>
</div>
);
};

export default signUp;