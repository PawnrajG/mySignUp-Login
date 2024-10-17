import React from "react";
import axios from "axios";
import { useState } from "react";
import PassReset from "./PassReset";


const SendMail = ()=>{
    const [email,setEmail] = useState("");
    const [sendMail, setsendMail] = useState(true);
  
    const handleMail = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:3000/api/reset-password',{email}).then((res)=>{
            if(res.status === 200){
                window.alert('Email sent! Check your inbox');  
                setsendMail(false);
            }
        }).catch((err)=>{
            if(err.response && err.response.status === 404){
                window.alert("Invalid Email");
            }else {
                window.alert("Oops! something went wrong, try again..");
            }
        });
    }
    return (
        <>
        {sendMail ? <div className="flex items-center justify-center">
            <form onSubmit={handleMail} className="w-96 h-84 p-5 my-48 bg-black text-white flex flex-col rounded-md shadow-lg shadow-neutral-900" method="POST">
                <h2 className="text-gray-500 text-2xl mx-3 my-2">Code Generation</h2>
                <input onChange={(input)=>{setEmail(input.target.value)}} className="m-3 px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700 transition delay-75 hover:outline-cyan-500 outline-none" type="email" name="Email" placeholder="Your email" required/>
                <div className="flex flex-col items-center justify-center m-2">
                    <button className="text-md text-white text-center bg-cyan-500 px-2 py-1 rounded-md w-24 my-4 cursor-pointer" type="submit">Send code</button>
                </div>
            </form>
        </div> : <PassReset/>}
    
        </>
    )
}

export default SendMail