import React from "react";
import axios from "axios";
import { useState } from "react";
import SignIn from "./SignIn";

const SignUp = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [signUp,setSignUp] = useState(true);
    
    
    const handleSignup = async(e) =>{
        e.preventDefault();
        const data = {name,email,password};
        await axios.post('http://localhost:3000/api/signup',data).then((res)=>{
            if(res.status === 201){
                window.alert(`Account created for you ${name}!`);
                setSignUp(false);
            }
        }).catch((err)=>{
         
            if (err.response && err.response.status === 409) {
                window.alert(`${email} already exists. Please use a different email.`);
            } else {
                console.log(err);
            }
            
        });
    }
    return (
        <>
        {signUp ? <div className="flex items-center justify-center">
            <form onSubmit={handleSignup} className="w-96 h-96 p-5 my-28 bg-black text-white flex flex-col rounded-md shadow-lg shadow-neutral-900" method="POST">
                <h2 className="text-gray-500 text-2xl mx-3 my-2">Sign Up</h2>
                <input onChange={(input)=>{setName(input.target.value)}} className="m-3 px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700 transition delay-75 hover:outline-cyan-500 outline-none" type="text" name="Username" placeholder="Username" required/>
                <input onChange={(input)=>{setEmail(input.target.value)}} className="m-3 px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700 transition delay-75 hover:outline-cyan-500 outline-none" type="email" name="Email" placeholder="Email" required/>
                <input onChange={(input)=>{setPassword(input.target.value)}} className="m-3 px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700 transition delay-75 hover:outline-cyan-500 outline-none" type="password" name="Password" placeholder="Password" required/>
                <div className="flex flex-col items-center justify-center m-2">
                    <button className="text-md text-white text-center bg-cyan-500 px-2 py-1 rounded-md w-24 my-4 cursor-pointer" type="submit">Sign Up</button>
                </div>
            </form>
        </div>: <SignIn/>}
        </>
    )
}

export default SignUp