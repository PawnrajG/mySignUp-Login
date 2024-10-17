import React, { useState } from "react"
import SignUp from "./SignUp"
import SignIn from "./SignIn"


const Home = () =>{
    const [signup, setSignup] = useState(false)
    const [signin, setSignin] = useState(false)
    return (
        <>
        <div className="w-screen h-screen bg-neutral-900">
            <nav className="flex justify-end bg-black p-3 w-screen h-18">
                <button className="px-3 py-1 mx-2 my-1 text-md rounded-lg border-2 bg-cyan-500 text-white border-cyan-500 cursor-pointer" 
                    onClick={
                        ()=>{
                            if(!signup){
                                setSignup(true)
                                setSignin(false)
                            }else{
                                setSignup(false)
                                setSignin(false)
                            }
                        }
                    }>Sign Up</button>
                <button className="px-3 py-1 mx-2 my-1 text-md rounded-lg border-2 bg-cyan-500 text-white border-cyan-500 cursor-pointer" 
                onClick={
                    ()=>{
                        if(!signin){
                            setSignin(true)
                            setSignup(false)
                        }else{
                            setSignup(false)
                            setSignin(false)
                        }
                    }
                }>Sign In</button>
            </nav>
            {signup && <SignUp/>}
            {signin && <SignIn/>}
        </div>
        </>
    )
}

export default Home