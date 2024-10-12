import express from 'express';
import bcrypt from 'bcrypt';
import User from '../model/user.js';

const router = express.Router();

// router.get("/test",(req,res)=>{
//     res.json({message:"Testing router is successful"});
// });

router.post("/signup",async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const userExists = await User.findOne({email});
        const hashedPassword = await bcrypt.hash(password,10);    
        if(!userExists){
            const newUser = new User({name, email, password:hashedPassword});
            await newUser.save();
            return res.status(201).json({message: "Account Created"});
        }
        return res.status(409).json({message:"Email already exists"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});





export default router;