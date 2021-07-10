import React, { useState} from 'react'
import log from './Amazon_logo.svg.png'
import {Link , useHistory } from "react-router-dom"
import "./Login.css"
import {auth} from './firebase'

function Login() {
    const History = useHistory();
    const [email , setEmail]=useState('');
    const [password , setPassword]=useState('');

    const login= event=>{
        event.preventDefault(); // this stops the refresh
        //login logic here
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //loggedin successfully and redirect to homepage..
            History.push("/");
        })
        .catch((e)=> alert(e.message));

    }

    const register= event=>{
        event.preventDefault(); // this stops the refresh
        //register logic here
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //created a user and logged in and redirect to homepage...
            History.push("/");
        })
        .catch((e)=>alert(e.message));
        
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src={log} alt="logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign in </h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signinButton">Sign in</button>
                </form>
                <p>
                    By singing-in you agree to Amazon's conditions of use & sale. please see our privacy 
                    notice ,our cookies notice and our interest-based aids notice
                </p>
                <button onClick={register} className="login__registrationButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
