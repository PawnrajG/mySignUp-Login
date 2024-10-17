import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import SendMail from './SendMail';


const SignIn = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sendMail, setsendMail] = useState(false);
    const [signIn, setSignIn] = useState(true);

    const handleSignin = async (e)=>{
        e.preventDefault();
        const data = {email,password};

        //console.log(data);
        await axios.post("http://localhost:3000/api/signin",data).then((res)=>{
            if(res.status === 200){
                window.alert("Signed in successfully!");
            }
        }).catch((err) => {
            if (err.response && err.response.status === 404) {
                window.alert(`${email} does not exists. Please use a valid email.`);
            }else if(err.response && err.response.status === 401){
                window.alert("Invalid password. Enter correct password!");
            } else {
                console.log(err);
            }
        });   
    }

    const toSendMail = ()=>{
        setsendMail(true);
        setSignIn(false);
    }

    return (
        <>
        {signIn && <div className="flex items-center justify-center">
            <form onSubmit={handleSignin} method="POST" className="w-96 h-80 p-5 my-40 bg-black text-white flex flex-col rounded-md shadow-lg shadow-neutral-900">
                <h2 className="text-gray-500 text-2xl mx-3 my-2">Sign In</h2>
                <input onChange={(input) => setEmail(input.target.value)} className="m-3 px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700 transition delay-75 hover:outline-cyan-500 outline-none" type="email" name="Email" placeholder="Email" required/>
                <input onChange={(input) => setPassword(input.target.value)} className="m-3 px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700 transition delay-75 hover:outline-cyan-500 outline-none" type="password" name="Password" placeholder="Password" required/>
                <div className="flex flex-col items-center justify-center m-2">
                    <button type="submit" className="text-md text-white text-center bg-cyan-500 px-2 py-1 rounded-md w-24 my-4 cursor-pointer">Sign In</button>
                    <a className="m-2 text-center text-cyan-500 w-auto" onClick={toSendMail}>Forget Password?</a>
                </div>
            </form>
        </div>}
        {sendMail && <SendMail/>}
        </>
    )
}

export default SignIn