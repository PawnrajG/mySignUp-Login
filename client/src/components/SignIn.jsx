import React from "react"
const SignIn = ()=>{
    return (
        <>
        <div className="flex items-center justify-center">
            <div className="w-96 h-80 p-5 my-40 bg-black text-white flex flex-col rounded-md shadow-lg shadow-neutral-900">
                <h2 className="text-gray-500 text-2xl mx-3 my-2">Sign In</h2>
                <input className="m-3 px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700 transition delay-75 hover:outline-cyan-500 outline-none" type="email" name="Email" placeholder="Email"/>
                <input className="m-3 px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700 transition delay-75 hover:outline-cyan-500 outline-none" type="password" name="Password" placeholder="Password"/>
                <div className="flex flex-col items-center justify-center m-2">
                    <button className="text-md text-white text-center bg-cyan-500 px-2 py-1 rounded-md w-24 my-4 cursor-pointer">Sign In</button>
                    <a href="#" className="m-2 text-center text-cyan-500 w-auto ">Forget Password?</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignIn