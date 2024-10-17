import React from "react";
import axios from "axios";
import { useState } from "react";

const PassReset = ()=>{
    const [token,setToken] = useState("");
    const [password,setPassword] = useState("");

    
    const handleReset = async(e) =>{
        e.preventDefault();
        await axios.post(`http://localhost:3000/api/reset-password/${token}`,{password}).then((res)=>{
            if(res.status === 200){
                window.alert('Password changed for you!');
            }
        }).catch((err)=>{
            if(err.response && err.response.status === 404){
                window.alert("Invalid code");
            }else{
                window.alert("Oops! something went wrong, try again..");
            }
        });
    }
    return (
        <>
        <div className="flex items-center justify-center">
            <form onSubmit={handleReset} className="w-96 h-84 p-5 my-40 bg-black text-white flex flex-col rounded-md shadow-lg shadow-neutral-900" method="POST">
                <h2 className="text-gray-500 text-2xl mx-3 my-2">Change Password</h2>
                <input onChange={(input)=>{setPassword(input.target.value)}} className="m-3 px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700 transition delay-75 hover:outline-cyan-500 outline-none" type="password" name="Password" placeholder="New password" required/>
                <input onChange={(input)=>{setToken(input.target.value)}} className="m-3 px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700 transition delay-75 hover:outline-cyan-500 outline-none" type="token" name="Token" placeholder="Reset code" required/>
                <div className="flex flex-col items-center justify-center m-2">
                    <button className="text-md text-white text-center bg-cyan-500 px-2 py-1 rounded-md w-24 my-4 cursor-pointer" type="submit">Change</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default PassReset